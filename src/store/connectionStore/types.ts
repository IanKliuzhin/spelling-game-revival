import { Database } from '@firebase/database';
import { RootStore } from '..';
import { ExerciseDataType } from '../battleStore';

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
  REDUCE_LIFES = 'reduce-lifes',
  FINISH_EXERCISE = 'finish-exercise',
  END_GAME = 'end-game',
  REQUEST_RESTART = 'request-restart',
  GIVE_UP = 'give-up',
}

export type Message =
  | {
      type: MessageType.START_GAME;
    }
  | {
      type: MessageType.START_BATTLE;
      exercise: ExerciseDataType;
    }
  | {
      type: MessageType.REDUCE_LIFES;
    }
  | {
      type: MessageType.FINISH_EXERCISE;
      secondsLeft: number;
      lifesLeft: number;
    }
  | {
      type: MessageType.END_GAME;
    }
  | {
      type: MessageType.REQUEST_RESTART;
    }
  | {
      type: MessageType.GIVE_UP;
    };
