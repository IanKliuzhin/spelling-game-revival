import { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { useStore } from 'src/store';
import { LifeList } from '../../components';
import './style.scss';

export const Battle = observer(() => {
  const { battleStore } = useStore();
  const { listCharacter } = battleStore;

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
              <LifeList count={listCharacter[0].counterLife} />
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
          <div className="imageExercise"></div>
          <div className="inputExercise">
            <div className="letterExercise">г</div>
            <div className="letterExercise">е</div>
            <div className="letterExercise mistake">р</div>
          </div>
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
