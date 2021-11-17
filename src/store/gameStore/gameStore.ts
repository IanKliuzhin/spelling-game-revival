import { action, makeObservable, observable } from 'mobx';

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

  constructor() {
    makeObservable(this, {
      difficulty: observable,
      playerType: observable,
      gameId: observable,
      isConnected: observable,
      setDifficulty: action,
      setPlayerType: action,
      setIsConnected: action,
    });
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
}
