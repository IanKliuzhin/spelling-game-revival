import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';
import { useStore } from 'src/store';
import { PlayerType } from 'src/store/gameStore';
import { LifeList, StartButton, WordAnswer } from 'src/components';
import ReactHowler from 'react-howler';
import cn from 'classnames';
import './style.scss';

export const Battle = observer(() => {
  const { battleStore, gameStore } = useStore();
  const { counterLife, exerciseData, isPlayingSound, isCorrectAnswer } =
    battleStore;
  const {
    playerType,
    heroScore,
    rivalScore,
    heroBattleResult,
    rivalBattleResult,
  } = gameStore;
  const listLetter = battleStore.getListLetter();
  const styleImage = {
    backgroundImage: exerciseData.imageSrc,
  };
  const isBattleEnded = heroBattleResult && rivalBattleResult;

  const handleClickExercise = () => {
    battleStore.setPlayingSound(true);
  };

  const handleEndSound = () => {
    battleStore.setPlayingSound(false);
  };

  useEffect(() => {
    battleStore.setPlayingSound(true);
  }, []);

  const styleAnswer = cn('exercise', { correctAnswer: isCorrectAnswer });

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
          <div className="glassesWrapper">
            <span className="glassesTitle">Очки:</span>
            <span className="glassesNumber">{heroScore}</span>
          </div>
        </div>
        <div className="centerContainer">0:12</div>
        <div className="rightContainer characterInfoContainer">
          <div className="topLine">
            <div className="avatar"></div>
            <div className="nameContainer">
              <div className="nickname">Соперник</div>
            </div>
          </div>
          <div className="glassesWrapper">
            <span className="glassesNumber">{rivalScore}</span>
            <span className="glassesTitle">:Очки</span>
          </div>
        </div>
      </div>
      <div className="exerciseContainer">
        <div className={styleAnswer}>
          <div
            className="imageExercise"
            style={styleImage}
            onClick={handleClickExercise}
          >
            <ReactHowler
              src={exerciseData.soundSrc}
              playing={isPlayingSound}
              onEnd={handleEndSound}
            />
            <div className="soundIcon"></div>
          </div>
          <WordAnswer letters={listLetter} isCorrectAnswer={isCorrectAnswer} />
        </div>
      </div>
      <div className="keyBoardWrapper">
        <div className="keyBoardContainer">
          <div className="keyBoardItem"></div>
        </div>
      </div>
      {playerType === PlayerType.HOST && isBattleEnded && (
        <StartButton type="battle" />
      )}
    </div>
  );
});
