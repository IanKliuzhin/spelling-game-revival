import { observer } from 'mobx-react-lite';
import { useEffect, useState } from 'react';
import { useStore } from 'src/store';
import { PlayerType } from 'src/store/gameStore';
import {
  BattleResult,
  Score,
  Countdown,
  ExitButton,
  LifeList,
  StartButton,
  WordAnswer,
} from 'src/components';
import ReactHowler from 'react-howler';
import cn from 'classnames';
import './style.scss';
import { toJS } from 'mobx';

export const Battle = observer(() => {
  const { battleStore, gameStore } = useStore();
  const {
    counterLife,
    exerciseData,
    isPlayingSound,
    isCorrectAnswer,
    deadline,
    losing,
  } = battleStore;
  const { playerType, heroBattleResult, rivalBattleResult, rivalLifesAmount } =
    gameStore;
  const listLetter = battleStore.getListLetter();
  const styleImage = {
    backgroundImage: `url(${exerciseData?.imageSrc})`,
  };
  const isBattleEnded = heroBattleResult && rivalBattleResult;

  const [isCountdownGoing, setIsCountdownGoing] = useState(false);

  const handleClickExercise = () => {
    battleStore.setPlayingSound(true);
  };

  const handleEndSound = () => {
    battleStore.setPlayingSound(false);
  };

  useEffect(() => {
    setIsCountdownGoing(true);
    console.log(toJS(exerciseData));
  }, [exerciseData]);

  const countdownCallback = () => {
    setIsCountdownGoing(false);
    battleStore.setPlayingSound(true);
    battleStore.startTimer();
  };
  const styleAnswer = cn('exercise', {
    correctAnswer: isCorrectAnswer,
    losing: losing,
  });

  // mistake - ошибка буквы
  // correctAnswer - стили состояние правильного ответа

  return (
    <div className="pageBattle">
      <div className="headerWrapper">
        <div className="leftContainer characterInfoContainer">
          <div className="topLine">
            <div className="avatar"></div>
            <div className="nameContainer">
              <div className="nickname">Ты</div>
              <LifeList count={counterLife} />
            </div>
          </div>
          <Score />
        </div>
        <div className="centerContainer">{`0:${deadline}`}</div>
        <div className="rightContainer characterInfoContainer">
          <div className="topLine">
            <div className="avatar"></div>
            <div className="nameContainer">
              <div className="nickname">Соперник</div>
              <LifeList count={rivalLifesAmount} />
            </div>
          </div>
          <Score isRival />
        </div>
      </div>
      {isBattleEnded ? (
        <div className="battleResultWrapper">
          <BattleResult />
          <BattleResult isRival />
        </div>
      ) : isCountdownGoing ? (
        <Countdown callback={countdownCallback} />
      ) : (
        <>
          <div className="exerciseContainer">
            <div className={styleAnswer}>
              <div
                className="imageExercise"
                style={styleImage}
                onClick={handleClickExercise}
              >
                {exerciseData && (
                  <ReactHowler
                    src={exerciseData.soundSrc}
                    playing={isPlayingSound}
                    onEnd={handleEndSound}
                    format={['mp3']}
                  />
                )}
                <div className="soundIcon"></div>
              </div>
              <WordAnswer
                letters={listLetter}
                isCorrectAnswer={isCorrectAnswer}
                losing={losing}
              />
            </div>
          </div>
          <div className="keyBoardWrapper">
            <div className="keyBoardContainer">
              <div className="keyBoardItem"></div>
            </div>
          </div>
          <ExitButton />
        </>
      )}
      {playerType === PlayerType.HOST && isBattleEnded && (
        <StartButton type="battle" />
      )}
    </div>
  );
});
