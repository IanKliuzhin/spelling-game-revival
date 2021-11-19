import { Button, ButtonType } from 'src/components';
import { useStore } from 'src/store';

export const ExitButton = () => {
  const { gameStore } = useStore();
  return (
    <Button
      type={ButtonType.MAIN_MENU}
      handleClick={() => gameStore.abortGame()}
      text="На главную"
    />
  );
};
