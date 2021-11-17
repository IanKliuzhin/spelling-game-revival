import { MainMenu } from 'src/pages';
import { useStore } from 'src/store';

const pages = {
  mainMenu: MainMenu,
};

export const PageManager = () => {
  const { pageStore } = useStore();

  const PageComponent = pages[pageStore.activePageName];

  return <PageComponent />;
};
