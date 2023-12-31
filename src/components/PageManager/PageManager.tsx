import { observer } from 'mobx-react-lite';
import {
  MainMenu,
  DifficultyChoice,
  ConnectionForm,
  BattleInfo,
  Battle,
} from 'src/pages';
import { useStore } from 'src/store';
import { PageNameType } from 'src/store/pageStore';

const pages: Record<PageNameType, () => JSX.Element> = {
  mainMenu: MainMenu,
  difficultyChoice: DifficultyChoice,
  connectionForm: ConnectionForm,
  battleInfo: BattleInfo,
  battle: Battle,
};

export const PageManager = observer(() => {
  const { pageStore } = useStore();

  const PageComponent = pages[pageStore.activePageName];

  return <PageComponent />;
});
