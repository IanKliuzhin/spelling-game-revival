import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';
import { useStore } from 'src/store';
import { LifeList, WordAnswer } from '../../components';
import ReactHowler from 'react-howler';
import './style.scss';

export const Battle = observer(() => {
  const { battleStore } = useStore();
  const { counterLife, exerciseData, isPlayingSound } = battleStore;
  const listLetter = battleStore.getListLetter();
  const styleImage = {
    backgroundImage: exerciseData.imageSrc,
  };

  const handleClickExercise = () => {
    battleStore.setPlayingSound(true);
  };

  const handleEndSound = () => {
    battleStore.setPlayingSound(false);
  };

  useEffect(() => {
    battleStore.setPlayingSound(true);
  }, []);

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
            <span className="glassesNumber">850</span>
          </div>
        </div>
        <div className="centerContainer">0:12</div>
        <div className="rightContainer characterInfoContainer">
          <div className="topLine">
            <div className="avatar"></div>
            <div className="nameContainer">
              <div className="nickname">Соперник</div>
              <div className="lifeList">
                <div className="lifeElement"></div>
                <div className="lifeElement"></div>
                <div className="lifeElement"></div>
              </div>
            </div>
          </div>
          <div className="glassesWrapper">
            <span className="glassesNumber">1850</span>
            <span className="glassesTitle">:Очки</span>
          </div>
        </div>
      </div>
      <div className="exerciseContainer">
        <div className="exercise correctAnswer">
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
          <WordAnswer letters={listLetter} />
        </div>
      </div>
      <div className="keyBoardWrapper">
        <div className="keyBoardContainer">
          <div className="keyBoardItem"></div>
        </div>
      </div>
    </div>
  );
});
