import { action, makeObservable, observable } from 'mobx';

export type PageNameType = 'mainMenu';

export class PageStore {
  activePageName: PageNameType = 'mainMenu';
  constructor() {
    makeObservable(this, {
      activePageName: observable,
      changePage: action,
    });
  }

  changePage = (pageName: PageNameType) => {
    this.activePageName = pageName;
  };
}
