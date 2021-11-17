import { useStore } from 'src/store';
import { PlayerType } from 'src/store/gameStore/gameStore';
import './style.scss';

export const MainMenu = () => {
  const { gameStore, pageStore } = useStore();

  const handleCreateGameClick = () => {
    gameStore.setPlayerType(PlayerType.HOST);
    pageStore.changePage('difficultyChoice');
  };

  return (
    <div className="mainPage">
      <div className="wrapperButton">
        <div className="button" onClick={handleCreateGameClick}>
          Создать битву
        </div>
        <div className="button">Присоединиться к битве</div>
      </div>
    </div>
  );
};
