import { makeObservable, observable, action } from 'mobx';
import { initializeApp } from 'firebase/app';
import {
  Database,
  getDatabase,
  ref,
  set,
  onValue,
  remove,
} from 'firebase/database';
import { nanoid } from 'nanoid';
import { firebaseConfig } from './firebaseConfig';
import { RootStore } from '..';
import { ConnectionStoreType, Message, MessageType } from './types';

const CONNECTION_CONFIG = {
  iceServers: [{ urls: 'stun:stun2.1.google.com:19302' }],
};

export class ConnectionStore implements ConnectionStoreType {
  db: Database;
  connectionId: string | null = null;
  connection: RTCPeerConnection | null = null;
  channel: RTCDataChannel | null = null;
  isConnected = false;
  rootStore: RootStore;

  constructor({ rootStore }: { rootStore: RootStore }) {
    makeObservable(this, {
      connectionId: observable,
      isConnected: observable,
      setIsConnected: action,
      closeConnection: action,
    });
    this.rootStore = rootStore;
    const app = initializeApp(firebaseConfig);
    this.db = getDatabase(app);
  }

  setIsConnected = (isConnected: boolean) => {
    this.isConnected = isConnected;
  };

  startHostSession = async () => {
    this.connection = new RTCPeerConnection(CONNECTION_CONFIG);
    this.connectionId = nanoid(5);
    this.connection.oniceconnectionstatechange = () => {
      if (this.connection?.iceConnectionState === 'disconnected') {
        this.rootStore.gameStore.abortGame();
      }
    };

    this.connection.onicecandidate = (event) => {
      if (event.candidate) {
        set(ref(this.db, `${this.connectionId}/host-candidate`), {
          value: JSON.stringify(event.candidate),
        });
      }
    };

    this.setChannel(this.connection.createDataChannel('channel'));

    const offer = await this.connection.createOffer();
    await this.connection.setLocalDescription(offer);
    await set(ref(this.db, `${this.connectionId}/offer`), {
      value: JSON.stringify(offer),
    });
    onValue(ref(this.db, `${this.connectionId}/answer`), (snapshot) => {
      if (this.connection && snapshot.exists()) {
        const answer = JSON.parse(snapshot.val().value);
        this.connection.setRemoteDescription(answer);
      }
    });

    onValue(
      ref(this.db, `${this.connectionId}/client-candidate`),
      (snapshot) => {
        if (this.connection && snapshot.exists()) {
          const candidate = JSON.parse(snapshot.val().value);
          this.connection?.addIceCandidate(new RTCIceCandidate(candidate));
          this.setIsConnected(true);
        }
      },
    );
  };

  startClientSession = async (connectionId: string) => {
    this.connectionId = connectionId;
    this.connection = new RTCPeerConnection(CONNECTION_CONFIG);

    const receiveChannelCallback = (ev: RTCDataChannelEvent) => {
      this.setChannel(ev.channel);
    };
    this.connection.ondatachannel = receiveChannelCallback;

    this.connection.onicecandidate = (event) => {
      if (event.candidate) {
        set(ref(this.db, `${this.connectionId}/client-candidate`), {
          value: JSON.stringify(event.candidate),
        });
      }
    };

    onValue(ref(this.db, `${this.connectionId}/offer`), async (snapshot) => {
      if (this.connection && snapshot.exists()) {
        const offer = JSON.parse(snapshot.val().value);
        await this.connection?.setRemoteDescription(offer);
        const answer = await this.connection?.createAnswer();
        await this.connection?.setLocalDescription(answer);
        await set(ref(this.db, `${this.connectionId}/answer`), {
          value: JSON.stringify(answer),
        });

        onValue(
          ref(this.db, `${this.connectionId}/host-candidate`),
          (snapshot) => {
            if (snapshot.exists()) {
              const candidate = JSON.parse(snapshot.val().value);
              this.connection?.addIceCandidate(new RTCIceCandidate(candidate));
              this.setIsConnected(true);
            }
          },
        );
      }
    });
  };

  setChannel = (channel: RTCDataChannel) => {
    this.channel = channel;
    this.channel.onmessage = (ev) => {
      const data = JSON.parse(ev.data);
      console.log('got data by channel', data);
      this.handleMessage(data);
    };
    this.channel.onclose = () => {
      this.rootStore.gameStore.abortGame();
    };
  };

  sendMessage = (message: Message) => {
    this.channel?.send(JSON.stringify(message));
  };

  closeConnection = () => {
    remove(ref(this.db, `${this.connectionId}`));
    this.channel?.close();
    this.connection?.close();

    this.channel = null;
    this.connection = null;
    this.connectionId = null;
    this.isConnected = false;
  };

  handleMessage = (message: Message) => {
    switch (message.type) {
      case MessageType.START_GAME:
        this.rootStore.gameStore.startGame();
        break;
      case MessageType.START_BATTLE:
        this.rootStore.gameStore.startBattle(message.exercise);
        break;
      case MessageType.REDUCE_LIFES:
        this.rootStore.gameStore.reduceRivalLifes();
        break;
      case MessageType.FINISH_EXERCISE:
        this.rootStore.gameStore.saveBattleResult(
          {
            secondsLeft: message.secondsLeft,
            lifesLeft: message.lifesLeft,
          },
          true,
        );
        break;
      case MessageType.END_GAME:
        this.rootStore.gameStore.endGame();
        break;
      case MessageType.REQUEST_RESTART:
        this.rootStore.gameStore.saveRestartRequest(true);
        break;
      default:
        break;
    }
  };
}
