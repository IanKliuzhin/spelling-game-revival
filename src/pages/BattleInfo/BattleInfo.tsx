import { observer } from 'mobx-react-lite';
import { useStore } from 'src/store';
import { ExitButton, StartButton } from 'src/components';
import { PlayerType } from 'src/store/gameStore';
import './style.scss';

export const BattleInfo = observer(() => {
  const { gameStore, connectionStore } = useStore();
  const { isConnected, connectionId } = connectionStore;
  const {
    playerType,
    isGameEnded,
    hasHeroRequestedRestart,
    heroScore,
    rivalScore,
  } = gameStore;

  let heroWin = false;
  let rivalWin = false;
  let deadHeat = false;
  if (heroScore > rivalScore) {
    heroWin = true;
  }
  if (rivalScore > heroScore) {
    rivalWin = true;
  }
  if (rivalScore === heroScore) {
    deadHeat = true;
  }

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
      <div className="fighter hero">
        <div className="avatarHero" />
        {isGameEnded && (
          <div className="counterResult">
            {heroScore} <span>очков</span>
          </div>
        )}
        {isGameEnded && heroWin && <div className="cup" />}
      </div>
      <div className="versus">
        VS
        {isGameEnded && deadHeat && <div className="deadHeat" />}
      </div>
      {isConnected ? (
        <div className="fighter rival">
          <div className="avatarRival" />
          {isGameEnded && (
            <div className="counterResult">
              {rivalScore} <span>очков</span>
            </div>
          )}
          {isGameEnded && rivalWin && <div className="cup" />}
        </div>
      ) : (
        'Ожидание соперника...'
      )}
      <ExitButton />
      {playerType === PlayerType.HOST && isConnected && buttonOrCaption}
      {playerType === PlayerType.CLIENT && isGameEnded && buttonOrCaption}
    </div>
  );
});
