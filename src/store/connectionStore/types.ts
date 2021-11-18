import { Database } from '@firebase/database';
import { RootStore } from '..';

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
  sendMessage: (message: MessageType) => void;
  closeConnection: () => void;
  handleMessage: (message: Message) => void;
};
