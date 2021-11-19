import { observer } from 'mobx-react-lite';
import { useStore } from 'src/store';
import { MainMenuButton, StartButton } from 'src/components';
import { PlayerType } from 'src/store/gameStore';
import './style.scss';

export const BattleInfo = observer(() => {
  const { gameStore, connectionStore } = useStore();
  const { isConnected, connectionId } = connectionStore;
  const { playerType, isGameEnded, hasHeroRequestedRestart } = gameStore;

  const buttonOrCaption = hasHeroRequestedRestart ? (
    <div className="waiting">Ожидание решения противника</div>
  ) : (
    <StartButton type="game" />
  );

  return (
    <div className="battleInfo">
      {playerType === PlayerType.HOST && !isConnected && (
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
      {playerType === PlayerType.HOST && isConnected && buttonOrCaption}
      {playerType === PlayerType.CLIENT && isGameEnded && buttonOrCaption}
    </div>
  );
});
