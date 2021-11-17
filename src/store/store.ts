import { createContext, useContext } from 'react';
import { GameStore } from './gameStore/gameStore';
import { PageStore } from './pageStore';

export class RootStore {
  pageStore: PageStore;
  gameStore: GameStore;

  constructor() {
    this.pageStore = new PageStore();
    this.gameStore = new GameStore();
  }
}

export const createStore = (): RootStore => {
  return new RootStore();
};

export const ContextStore = createContext<RootStore>({} as RootStore);

export const useStore = (): RootStore => useContext<RootStore>(ContextStore);
