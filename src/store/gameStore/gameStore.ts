import { action, makeObservable, observable } from 'mobx';
import { shuffle } from 'src/utils/helpers';
import { RootStore } from '..';
import { ExerciseDataType } from '../battleStore';
import { exercises } from './exercises';
import { BattleResultType, DifficultyType, PlayerType } from './types';

export class GameStore {
  difficulty = DifficultyType.EASY;
  playerType = PlayerType.HOST;
  gameId = '';
  rootStore: RootStore;
  isGameStarted = false;
  isGameEnded = false;
  heroScore = 0;
  rivalScore = 0;
  exercises: ExerciseDataType[] = [];

  constructor({ rootStore }: { rootStore: RootStore }) {
    makeObservable(this, {
      difficulty: observable,
      playerType: observable,
      gameId: observable,
      setDifficulty: action,
      setPlayerType: action,
      resetGame: action,
    });

    this.rootStore = rootStore;
  }

  setDifficulty = (difficulty: DifficultyType) => {
    this.difficulty = difficulty;
  };

  setPlayerType = (playerType: PlayerType) => {
    this.playerType = playerType;
  };

  setScore = (heroScore: number, rivalScore: number) => {
    this.heroScore = heroScore;
    this.rivalScore = rivalScore;
  };

  getExercises = () => {
    this.exercises = shuffle(exercises[this.difficulty]).slice(0, 10);
    console.log('this.exercises', this.exercises);
  };

  startGame = () => {
    this.getExercises();
    this.setScore(0, 0);
    this.isGameStarted = true;
    this.rootStore.pageStore.changePage('battle');
  };

  startBattle = (exercise: ExerciseDataType) => {
    // TODO передать word battleStore и начать exercise
    console.log('gameStore.startBattle exercise', exercise);
  };

  saveRivalResult = (result: BattleResultType) => {
    // TODO сохранить результат противника
    console.log('gameStore.saveRivalResult result', result);
  };

  endGame = () => {
    this.isGameEnded = true;
  };

  endBattle = () => {
    // TODO показать результаты тура и очки
  };

  saveRestartRequest = () => {
    // TODO сохранить согласие противника на перезапуск
  };

  resetGame = () => {
    this.rootStore.pageStore.changePage('mainMenu');
    this.rootStore.connectionStore.closeConnection();
    this.gameId = '';
  };
}
