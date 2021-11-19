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

  return (
    <div className="difficultyPage">
      <div className="wrapperButton">
        {Object.values(DifficultyType).map((difficulty) => (
          <Button
            key={difficulty}
            handleClick={() => handleDifficultyChoice(difficulty)}
            text={difficulty}
          />
        ))}
      </div>
      <ExitButton />
    </div>
  );
};
