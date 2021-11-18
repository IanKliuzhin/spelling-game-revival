import { Button, ButtonType } from 'src/components';
import { useStore } from 'src/store';
import { MessageType } from 'src/store/connectionStore/types';

export const StartGameButton = () => {
  const { gameStore, connectionStore } = useStore();
  const { isGameEnded } = gameStore;
  const handleClick = () => {
    connectionStore.sendMessage({
      type: MessageType.START_GAME,
    });
    gameStore.startGame();
  };

  return (
    <Button
      type={ButtonType.START_GAME}
      handleClick={handleClick}
      text={isGameEnded ? 'Новая игра' : 'Начать игру'}
    />
  );
};
