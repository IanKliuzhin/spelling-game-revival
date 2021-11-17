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

  constructor() {
    makeObservable(this, {
      difficulty: observable,
      playerType: observable,
      gameId: observable,
      setDifficulty: action,
      setPlayerType: action,
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
}
