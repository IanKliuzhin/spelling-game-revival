import { observer } from 'mobx-react-lite';
import cn from 'classnames';
import { useStore } from 'src/store';
import './style.scss';

export const InputLetter = observer(() => {
  const { battleStore } = useStore();
  const { activeLetter } = battleStore;
  const isHide = false;
  const isMistake = battleStore.getMistake();

  const styleContainer = cn('inputLetterContainer', {
    hide: isHide,
    mistake: isMistake,
  });

  const handleChangeInput = (event: React.FormEvent<HTMLInputElement>) => {
    const letter = event.currentTarget.value;
    if (letter.length > 1) {
      battleStore.setActiveLetter('');
    }

    if (letter === '') {
      battleStore.setActiveLetter('');
      return;
    }

    battleStore.setLetter(letter);
  };

  return (
    <div className={styleContainer}>
      <input
        type="text"
        className="inputLetter"
        autoFocus={true}
        maxLength={1}
        onChange={handleChangeInput}
        value={activeLetter}
      />
    </div>
  );
});
