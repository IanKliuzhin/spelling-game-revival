import { useStore } from 'src/store';
import { DifficultyType } from 'src/store/gameStore/gameStore';
import './style.scss';

export const DifficultyChoice = () => {
  const { gameStore, pageStore } = useStore();

  const handleDifficultyChoice = (difficulty: DifficultyType) => {
    gameStore.setDifficulty(difficulty);
    pageStore.changePage('mainMenu'); // TODO поменять на нужный экран, когда он будет создан
  };

  return (
    <div className="difficultyPage">
      <div className="wrapperButton">
        {Object.values(DifficultyType).map((difficulty) => (
          <div
            className="button"
            key={difficulty}
            onClick={() => handleDifficultyChoice(difficulty)}
          >
            {difficulty}
          </div>
        ))}
      </div>
    </div>
  );
};
