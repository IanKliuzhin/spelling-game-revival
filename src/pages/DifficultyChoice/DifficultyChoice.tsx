import { Button, ExitButton } from 'src/components';
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
    [DifficultyType.EASY]: 'Easy',
    [DifficultyType.MEDIUM]: 'Medium',
    [DifficultyType.HARD]: 'Hard',
  };

  return (
    <div className="difficultyPage">
      <div className="titlePage">Choose difficulty</div>
      <div className="wrapperButton">
        {Object.values(DifficultyType).map((difficulty) => (
          <Button
            key={difficulty}
            handleClick={() => handleDifficultyChoice(difficulty)}
            text={listButtonName[difficulty]}
          />
        ))}
      </div>
      <ExitButton />
    </div>
  );
};
