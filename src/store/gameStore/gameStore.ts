import { action, makeObservable, observable } from 'mobx';
import { RootStore } from '..';

export enum DifficultyType {
  EASY = 'easy',
  MEDIUM = 'medium',
  HARD = 'hard',
}

export enum PlayerType {
  HOST = 'host',
  CLIENT = 'client',
}

export type BattleResultType = {
  secondsLeft: number;
  lifesLeft: number;
};

// TODO брать из общего места
export type TaskType = {
  word: string;
  soundSrc: string;
  imageSrc: string;
};

export class GameStore {
  difficulty = DifficultyType.EASY;
  playerType = PlayerType.HOST;
  gameId = '';
  rootStore: RootStore;
  isGameStarted = false;
  isGameEnded = false;

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

  startGame = () => {
    // TODO сбросить очки
    this.isGameStarted = true;
    this.rootStore.pageStore.changePage('battle');
  };

  startBattle = (task: TaskType) => {
    // TODO передать word battleStore и начать exercise
    console.log('gameStore.startBattle task', task);
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
