import { observer } from 'mobx-react-lite';
import { MainMenu, DifficultyChoice } from 'src/pages';
import { useStore } from 'src/store';

const pages = {
  mainMenu: MainMenu,
  difficultyChoice: DifficultyChoice,
};

export const PageManager = observer(() => {
  const { pageStore } = useStore();

  const PageComponent = pages[pageStore.activePageName];

  return <PageComponent />;
});
