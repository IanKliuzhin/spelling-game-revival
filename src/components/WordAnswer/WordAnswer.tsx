import { observer } from 'mobx-react-lite';
import './style.scss';
import { LetterAnswer, InputLetter } from '../index';

export const WordAnswer = observer(({ letters }: { letters: string[] }) => {
  console.log(letters);
  const listLetter = [];
  for (const index in letters) {
    listLetter.push(
      <LetterAnswer letter={letters[index]} key={`LetterAnswer_${index}`} />,
    );
  }

  return (
    <div className="wordAnswer">
      {listLetter}
      <InputLetter />
    </div>
  );
});
