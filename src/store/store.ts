import { createContext, useContext } from 'react';
import { PageStore } from './pageStore';

export class RootStore {
  pageStore: PageStore;

  constructor() {
    this.pageStore = new PageStore();
  }
}

export const createStore = (): RootStore => {
  return new RootStore();
};

export const ContextStore = createContext<RootStore>({} as RootStore);

export const useStore = (): RootStore => useContext<RootStore>(ContextStore);
