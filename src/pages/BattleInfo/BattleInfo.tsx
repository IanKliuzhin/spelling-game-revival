import { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { useStore } from 'src/store';
import './style.scss';

export const BattleInfo = observer(() => {
  const { gameStore } = useStore();
  const { isConnected } = gameStore;

  // TODO убрать после появления настоящей логики соединения
  useEffect(() => {
    if (!isConnected) {
      window.setTimeout(() => {
        gameStore.setIsConnected(true);
      }, 3000);
    }
  }, [isConnected]);

  return (
    <div className="battleInfo">
      <div className="fighter hero"></div>
      <div className="versus">VS</div>
      {isConnected ? (
        <div className="fighter rival"></div>
      ) : (
        'Ожидание соперника...'
      )}
    </div>
  );
});
