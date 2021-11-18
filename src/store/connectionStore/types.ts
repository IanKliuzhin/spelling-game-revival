import { Database } from '@firebase/database';
import { RootStore } from '..';
import { TaskType } from '../gameStore';

export type ConnectionStoreType = {
  db: Database;
  connectionId: string | null;
  connection: RTCPeerConnection | null;
  channel: RTCDataChannel | null;
  isConnected: boolean;
  rootStore: RootStore;
  setIsConnected: (isConnected: boolean) => void;
  startHostSession: () => Promise<void>;
  startClientSession: (connectionId: string) => Promise<void>;
  setChannel: (channel: RTCDataChannel) => void;
  sendMessage: (message: Message) => void;
  closeConnection: () => void;
  handleMessage: (message: Message) => void;
};

export enum MessageType {
  START_GAME = 'start-game',
  START_BATTLE = 'start-battle',
  FINISH_TASK = 'finish-task',
  END_BATTLE = 'end-battle',
  END_GAME = 'end-game',
  REQUEST_RESTART = 'request-restart',
}

export type Message =
  | {
      type: MessageType.START_GAME;
    }
  | {
      type: MessageType.START_BATTLE;
      task: TaskType;
    }
  | {
      type: MessageType.FINISH_TASK;
      secondsLeft: number;
      lifesLeft: number;
    }
  | {
      type: MessageType.END_BATTLE;
    }
  | {
      type: MessageType.END_GAME;
    }
  | {
      type: MessageType.REQUEST_RESTART;
    };
