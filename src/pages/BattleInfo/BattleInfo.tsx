import { observer } from 'mobx-react-lite';
import { useStore } from 'src/store';
import { MainMenuButton, StartGameButton } from 'src/components';
import { PlayerType } from 'src/store/gameStore';
import './style.scss';

export const BattleInfo = observer(() => {
  const { gameStore, connectionStore } = useStore();
  const { isConnected, connectionId } = connectionStore;
  const { playerType } = gameStore;

  return (
    <div className="battleInfo">
      {playerType === PlayerType.HOST && (
        <div className="battleCode">
          Код игры: {connectionId}. Отправь его сопернику для подключения.
        </div>
      )}
      <div className="fighter hero"></div>
      <div className="versus">VS</div>
      {isConnected ? (
        <div className="fighter rival"></div>
      ) : (
        'Ожидание соперника...'
      )}
      <MainMenuButton />
      {isConnected && <StartGameButton />}
    </div>
  );
});
