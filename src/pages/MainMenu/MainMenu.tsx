import { useStore } from 'src/store';
import './style.scss';

export const MainMenu = () => {
  const { pageStore } = useStore();

  return (
    <div className="mainPage">
      <div className="wrapperButton">
        <div
          className="button"
          onClick={() => pageStore.changePage('difficultyChoice')}
        >
          Создать битву
        </div>
        <div className="button">Присоединиться к битве</div>
      </div>
    </div>
  );
};
