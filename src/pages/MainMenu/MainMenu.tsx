import { useStore } from 'src/store';
import { PlayerType } from 'src/store/gameStore';
import './style.scss';

export const MainMenu = () => {
  const { gameStore, pageStore } = useStore();

  const handleCreateGameClick = () => {
    gameStore.setPlayerType(PlayerType.HOST);
    pageStore.changePage('difficultyChoice');
  };

  const handleConnectClick = () => {
    gameStore.setPlayerType(PlayerType.CLIENT);
    pageStore.changePage('connectionForm');
  };

  return (
    <div className="mainPage">
      <div className="wrapperButton">
        <div className="button" onClick={handleCreateGameClick}>
          Создать битву
        </div>
        <div className="button" onClick={handleConnectClick}>
          Присоединиться к битве
        </div>
      </div>
    </div>
  );
};
