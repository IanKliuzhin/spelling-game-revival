import { Button, MainMenuButton } from 'src/components';
import { useStore } from 'src/store';
import { DifficultyType } from 'src/store/gameStore';
import './style.scss';

export const DifficultyChoice = () => {
  const { gameStore, pageStore } = useStore();

  const handleDifficultyChoice = (difficulty: DifficultyType) => {
    gameStore.setDifficulty(difficulty);
    pageStore.changePage('battleInfo');
  };

  const listButtonName = {
    [DifficultyType.EASY]: 'Легкий',
    [DifficultyType.MEDIUM]: 'Средний',
    [DifficultyType.HARD]: 'Тяжёлый',
  };

  return (
    <div className="difficultyPage">
      <div className="titlePage">Выбор сложности</div>
      <div className="wrapperButton">
        {Object.values(DifficultyType).map((difficulty) => (
          <Button
            key={difficulty}
            handleClick={() => handleDifficultyChoice(difficulty)}
            text={listButtonName[difficulty]}
          />
        ))}
      </div>
      <MainMenuButton />
    </div>
  );
};
