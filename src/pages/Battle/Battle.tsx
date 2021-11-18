import { observer } from 'mobx-react-lite';
import { useStore } from 'src/store';
import { LifeList, WordAnswer } from '../../components';
import './style.scss';

export const Battle = observer(() => {
  const { battleStore } = useStore();
  const { counterLife } = battleStore;
  const listLetter = battleStore.getListLetter();

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
          <div className="imageExercise"></div>
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
