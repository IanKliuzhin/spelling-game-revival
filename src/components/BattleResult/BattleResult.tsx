import { useStore } from 'src/store';
import { BattleResultType } from 'src/store/gameStore';
import { range } from 'src/utils/helpers';
import './style.scss';

export const BattleResult = ({ isRival = false }) => {
  const { gameStore } = useStore();
  const { REWARD_FOR_LIFE, REWARD_FOR_SECOND } = gameStore;
  const result = (
    isRival ? gameStore.rivalBattleResult : gameStore.heroBattleResult
  ) as BattleResultType;

  const scoreForLifes = result.lifesLeft * REWARD_FOR_LIFE;
  const scoreForSeconds = result.secondsLeft * REWARD_FOR_SECOND;

  const summ =
    scoreForLifes && scoreForSeconds ? scoreForLifes + scoreForSeconds : 0;

  return (
    <div className="battleResult">
      {summ > 0 && (
        <>
          <div className="scoreWrapper life">
            <div className="scoreImage">
              {range(result.lifesLeft).map((n) => (
                <div key={n} className="icon"></div>
              ))}
            </div>
            * {REWARD_FOR_LIFE} = {scoreForLifes}
          </div>
          <div className="scoreWrapper time">
            <div className="scoreImage">
              <div className="icon"></div> 0:{result.secondsLeft}
            </div>
            * {REWARD_FOR_SECOND} = {scoreForSeconds}
          </div>
        </>
      )}
      <div className="scoreWrapper score">
        <div className="scoreImage">
          <div className="icon"></div>
        </div>{' '}
        +{summ}
      </div>
    </div>
  );
};
