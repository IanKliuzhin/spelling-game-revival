import { Button, ButtonType } from 'src/components';
import { useStore } from 'src/store';

export const MainMenuButton = () => {
  const { gameStore } = useStore();
  return (
    <Button
      type={ButtonType.MAIN_MENU}
      handleClick={() => gameStore.resetGame()}
      text="На главную"
    />
  );
};
