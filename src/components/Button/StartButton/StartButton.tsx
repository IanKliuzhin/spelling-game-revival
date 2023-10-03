import { Button, ButtonType } from 'src/components';
import { useStore } from 'src/store';

export const StartButton = ({ type }: { type: 'game' | 'battle' }) => {
  const { gameStore } = useStore();
  const { isGameEnded } = gameStore;
  const handleClick = () => {
    switch (type) {
      case 'game':
        isGameEnded ? gameStore.saveRestartRequest() : gameStore.startGame();
        break;
      case 'battle':
        gameStore.startBattle();
        break;
      default:
        break;
    }
  };

  const getText = () => {
    switch (type) {
      case 'game':
        return isGameEnded ? 'New game' : 'Start';
      case 'battle':
        return 'Next word';
      default:
        return '';
    }
  };

  return (
    <Button
      type={ButtonType.START_GAME}
      handleClick={handleClick}
      text={getText()}
    />
  );
};
