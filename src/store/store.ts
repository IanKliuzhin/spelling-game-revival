import { createContext, useContext } from 'react';

type CreateStoreProps = {

};

export class RootStore {
  constructor({}: CreateStoreProps) {

  }
}

export const createStore = (props: CreateStoreProps): RootStore => {
  return new RootStore(props);
};

export const ContextStore = createContext<RootStore>({} as RootStore);

export const useStore = (): RootStore => useContext<RootStore>(ContextStore);
