import { RootStore } from '..';
import { ExerciseDataType } from '../battleStore';

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

export type Exercises = Record<DifficultyType, ExerciseDataType[]>;

export type GameStoreType = {
  difficulty: DifficultyType;
  playerType: PlayerType;
  gameId: string;
  rootStore: RootStore;
  isGameStarted: boolean;
  isGameEnded: boolean;
  heroScore: number;
  rivalScore: number;
  exercises: ExerciseDataType[];
  setDifficulty: (difficulty: DifficultyType) => void;
  setPlayerType: (playerType: PlayerType) => void;
  setScore: (heroScore: number, rivalScore: number) => void;
  getExercises: () => void;
  startGame: () => void;
  startBattle: (exercise: ExerciseDataType) => void;
  saveRivalResult: (result: BattleResultType) => void;
  endGame: () => void;
  endBattle: () => void;
  saveRestartRequest: () => void;
  resetGame: () => void;
};
