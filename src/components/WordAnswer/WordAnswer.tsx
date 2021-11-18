import { observer } from 'mobx-react-lite';
import './style.scss';
import { LetterAnswer, InputLetter } from '../index';

export const WordAnswer = observer(
  ({
    letters,
    isCorrectAnswer,
  }: {
    letters: string[];
    isCorrectAnswer: boolean;
  }) => {
    return (
      <div className="wordAnswer">
        {letters.map((item, index) => (
          <LetterAnswer letter={item} key={`LetterAnswer_${index}`} />
        ))}
        {!isCorrectAnswer && <InputLetter />}
      </div>
    );
  },
);
