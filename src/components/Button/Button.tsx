import cn from 'classnames';
import './style.scss';

export enum ButtonType {
  MAIN_MENU = 'mainMenu',
  START_GAME = 'startGame',
}

export const Button = ({
  type,
  handleClick,
  text,
}: {
  handleClick?: () => void;
  type?: ButtonType;
  text: string;
}) => {
  return (
    <div className={cn('button', type)} onClick={handleClick}>
      {text}
    </div>
  );
};
