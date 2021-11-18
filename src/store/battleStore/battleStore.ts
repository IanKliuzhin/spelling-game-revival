import { action, makeObservable, observable } from 'mobx';

export type ExerciseDataType = {
  word: string;
  soundSrc: string;
  imageSrc: string;
};

export type TimerType = number;

export class BattleStore {
  exerciseData: ExerciseDataType;

  counterLife: number;

  listLetter: string[];

  isMistake: boolean;

  activeLetter: string;

  constructor() {
    makeObservable(this, {
      counterLife: observable,
      listLetter: observable,
      isMistake: observable,
      activeLetter: observable,
      setLetter: action,
      setMistake: action,
      setActiveLetter: action,
    });

    this.counterLife = 3;
    this.listLetter = ['г', 'е'];
    this.isMistake = false;
    this.activeLetter = '';

    this.exerciseData = {
      word: 'гепард',
      soundSrc:
        'https://cms-content.uchi.ru/audios/reading/lesson_2_12/2.12._urok_5.3.mp3',
      imageSrc: '',
    };
  }

  setActiveLetter = (letter: string) => {
    this.activeLetter = letter;
  };

  getMistake = () => {
    return this.isMistake;
  };

  setMistake = (state: boolean) => {
    console.log('setMistake');
    this.isMistake = state;
  };

  getListLetter = () => {
    return this.listLetter;
  };

  setLetter = (letter: string) => {
    this.setActiveLetter(letter);
    this.checkMistake(this.checkLetter(letter));
    if (this.getMistake()) return;
    this.listLetter.push(letter);
    this.setActiveLetter('');
  };

  checkMistake = (isMistake: boolean) => {
    this.setMistake(isMistake);
  };

  checkLetter = (letter: string) => {
    const valueLetter = this.exerciseData.word.indexOf(letter);
    const countLetters = this.listLetter.length;
    const mistake = valueLetter === countLetters ? false : true;
    return mistake;
  };

  startBattle = (exercise: ExerciseDataType) => {
    // TODO сохранение текущего задания, сброс жизней на 3, сброс таймера на 10
    console.log('exercise', exercise);
  };

  endBattle = () => {
    // TODO отправка в гейм стор результата
    // const result: BattleResultType = {
    //   secondsLeft: 2,
    //   lifesLeft: 2,
    // };
    // this.rootStore.gameStore.saveBattleResult(result);
  };
}
