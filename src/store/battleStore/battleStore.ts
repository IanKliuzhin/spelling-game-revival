import { action, makeObservable, observable } from 'mobx';
import { RootStore } from '..';

export type ExerciseDataType = {
  word: string;
  soundSrc: string;
  imageSrc: string;
};

import { BattleResultType } from '../gameStore/types';

export type TimerType = number;

export class BattleStore {
  exerciseData: ExerciseDataType | null = null;

  rootStore: RootStore;

  counterLife: number;

  listLetter: string[];

  isMistake: boolean;

  isPlayingSound: boolean;

  isCorrectAnswer: boolean;

  activeLetter: string;

  counterTimer: number;

  timerId: number;

  deadline: string;

  losing: boolean;

  constructor({ rootStore }: { rootStore: RootStore }) {
    makeObservable(this, {
      counterLife: observable,
      listLetter: observable,
      isMistake: observable,
      activeLetter: observable,
      isPlayingSound: observable,
      isCorrectAnswer: observable,
      counterTimer: observable,
      timerId: observable,
      deadline: observable,
      exerciseData: observable,
      losing: observable,
      setLetter: action,
      setMistake: action,
      setActiveLetter: action,
      setPlayingSound: action,
      timer: action,
      updateTimer: action,
      startBattle: action,
      endBattle: action,
    });

    this.rootStore = rootStore;
    this.counterLife = 3;
    this.listLetter = [];
    this.isMistake = false;
    this.activeLetter = '';
    this.isPlayingSound = false;
    this.isCorrectAnswer = false;
    this.counterTimer = 20;
    this.timerId = 0;
    this.deadline = '20';
    this.losing = false;

    // this.exerciseData = {
    //   word: 'акула',
    //   soundSrc:
    //     'https://cms-content.uchi.ru/audios/reading/lesson_2_7/2.7_UROK_1.8.mp3',
    //   imageSrc: '/imagesWords/akula.jpg',
    // };
  }

  startBattle = (exercise: ExerciseDataType) => {
    this.counterTimer = 20;
    this.listLetter = [];
    this.counterLife = 3;
    this.timerId = 0;
    this.deadline = '20';
    this.exerciseData = exercise;
    this.isMistake = false;
    this.activeLetter = '';
    this.isPlayingSound = false;
    this.isCorrectAnswer = false;
    this.losing = false;
  };

  updateTimer = () => {
    this.counterTimer -= 1;
    this.deadline = `${this.counterTimer}`;
    if (this.counterTimer < 10) {
      this.deadline = `0${this.counterTimer}`;
    }

    if (this.counterTimer === 0) {
      this.limitDeadline();
    }
  };

  timer = () => {
    this.timerId = window.setInterval(this.updateTimer, 1000);
  };

  startTimer = () => {
    this.timer();
  };

  limitDeadline = () => {
    this.losing = true;
    this.addLetters();
    this.endBattle();
  };

  setActiveLetter = (letter: string) => {
    this.activeLetter = letter;
  };

  getMistake = () => {
    return this.isMistake;
  };

  setPlayingSound = (state: boolean) => {
    this.isPlayingSound = state;
  };

  setMistake = (state: boolean) => {
    this.isMistake = state;
  };

  getListLetter = () => {
    return this.listLetter;
  };

  setLetter = (letter: string) => {
    this.setActiveLetter(letter);
    this.checkMistake(this.checkLetter(letter));
    if (this.isMistake) {
      this.counterLife -= 1;
      this.checkCountLife();
      return;
    }
    this.listLetter.push(letter);
    this.setActiveLetter('');
    this.checkWord();
  };

  checkCountLife = () => {
    if (this.counterLife === 0) {
      this.losing = true;
      this.endBattle();
    }
  };

  checkWord = () => {
    if (this.listLetter.length === this.exerciseData?.word.length) {
      this.endBattle();
    }
  };

  checkMistake = (isMistake: boolean) => {
    this.setMistake(isMistake);
  };

  checkLetter = (letter: string) => {
    const countLetters = this.listLetter.length;
    const valueLetter = this.exerciseData?.word[countLetters];
    const mistake = valueLetter === letter ? false : true;
    return mistake;
  };

  addLetters = () => {
    const countLetters = this.listLetter.length;
    const wordExercise = this.exerciseData?.word;
    const added = wordExercise?.slice(countLetters);
    added?.split('').map((elem: string) => this.listLetter.push(elem));
  };

  endBattle = () => {
    if (!this.losing) this.isCorrectAnswer = true;
    clearInterval(this.timerId);
    const result: BattleResultType = {
      secondsLeft: this.counterTimer,
      lifesLeft: this.counterLife,
    };
    this.rootStore.gameStore.saveBattleResult(result);
  };
}
