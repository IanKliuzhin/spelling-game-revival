import { Button, ButtonType } from 'src/components';
import { useStore } from 'src/store';

export const ExitButton = () => {
  const { gameStore } = useStore();
  const { isGameStarted, isGameEnded } = gameStore;
  const isGameUp = isGameStarted && !isGameEnded;
  return (
    <Button
      type={ButtonType.MAIN_MENU}
      handleClick={() =>
        isGameUp ? gameStore.giveUp() : gameStore.abortGame()
      }
      text={isGameUp ? 'Give up' : 'Main page'}
    />
  );
};
