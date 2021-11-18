import cn from 'classnames';
import './style.scss';

export const LifeItem = ({ isDisabled }: { isDisabled: boolean }) => {
  const styleItem = cn('lifeElement', { disabledElem: isDisabled });
  return <div className={styleItem} />;
};
