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
  isConnected = false;
  rootStore: RootStore;

  constructor({ rootStore }: { rootStore: RootStore }) {
    makeObservable(this, {
      difficulty: observable,
      playerType: observable,
      gameId: observable,
      isConnected: observable,
      setDifficulty: action,
      setPlayerType: action,
      setIsConnected: action,
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

  setGameId = (gameId: string) => {
    this.gameId = gameId;
  };

  setIsConnected = (isConnected: boolean) => {
    this.isConnected = isConnected;
  };

  resetGame = () => {
    this.rootStore.pageStore.changePage('mainMenu');
    this.isConnected = false;
    this.gameId = '';
  };
}
