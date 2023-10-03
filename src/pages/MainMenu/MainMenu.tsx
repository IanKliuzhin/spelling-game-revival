import { Button } from 'src/components';
import { useStore } from 'src/store';
import { PlayerType } from 'src/store/gameStore';
import './style.scss';

export const MainMenu = () => {
  const { gameStore, pageStore, connectionStore } = useStore();

  const handleCreateGameClick = () => {
    gameStore.setPlayerType(PlayerType.HOST);
    pageStore.changePage('difficultyChoice');
    connectionStore.startHostSession();
  };

  const handleConnectClick = () => {
    gameStore.setPlayerType(PlayerType.CLIENT);
    pageStore.changePage('connectionForm');
  };

  return (
    <div className="mainPage">
      <div className="titlePage">Spelling game</div>
      <div className="wrapperButton">
        <Button handleClick={handleCreateGameClick} text="Create battle" />
        <Button handleClick={handleConnectClick} text="Connect to battle" />
      </div>
    </div>
  );
};
