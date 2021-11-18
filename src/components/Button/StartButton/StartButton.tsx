import { Button, ButtonType } from 'src/components';
import { useStore } from 'src/store';
import { MessageType } from 'src/store/connectionStore/types';

export const StartButton = ({ type }: { type: 'game' | 'battle' }) => {
  const { gameStore, connectionStore } = useStore();
  const { isGameEnded } = gameStore;
  const handleClick = () => {
    switch (type) {
      case 'game':
        connectionStore.sendMessage({
          type: MessageType.START_GAME,
        });
        gameStore.startGame();
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
        return isGameEnded ? 'Новая игра' : 'Начать игру';
      case 'battle':
        return 'Следующее слово';
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
