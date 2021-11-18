import { createContext, useContext } from 'react';
import { GameStore } from './gameStore/gameStore';
import { PageStore } from './pageStore';
import { BattleStore } from './battleStore';
import { ConnectionStore, ConnectionStoreType } from './connectionStore';

export class RootStore {
  pageStore: PageStore;
  gameStore: GameStore;
  connectionStore: ConnectionStoreType;
  battleStore: BattleStore;

  constructor() {
    this.pageStore = new PageStore();
    this.gameStore = new GameStore({ rootStore: this });
    this.connectionStore = new ConnectionStore({ rootStore: this });
    this.battleStore = new BattleStore();
  }
}

export const createStore = (): RootStore => {
  return new RootStore();
};

export const ContextStore = createContext<RootStore>({} as RootStore);

export const useStore = (): RootStore => useContext<RootStore>(ContextStore);
