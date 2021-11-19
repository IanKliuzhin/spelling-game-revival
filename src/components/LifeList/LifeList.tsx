import { observer } from 'mobx-react-lite';
import { LifeItem } from '../index';
import './style.scss';

export const LifeList = observer(({ count }: { count: number }) => {
  const listItem = [];
  for (let i = 1; i < 4; i++) {
    if (i <= count) {
      listItem.push(<LifeItem isDisabled={false} key={`lifeItem_${i}`} />);
    } else {
      listItem.push(<LifeItem isDisabled={true} key={`lifeItem_${i}`} />);
    }
  }
  return <div className="lifeList">{listItem}</div>;
});
