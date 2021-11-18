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

export class GameStore {
  difficulty = DifficultyType.EASY;
  playerType = PlayerType.HOST;
  gameId = '';
  rootStore: RootStore;

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

  resetGame = () => {
    this.rootStore.pageStore.changePage('mainMenu');
    this.rootStore.connectionStore.closeConnection();
    this.gameId = '';
  };
}
