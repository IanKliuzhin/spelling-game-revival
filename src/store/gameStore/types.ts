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
  isGameEnded: boolean;
  heroScore: number;
  rivalScore: number;
  exercises: ExerciseDataType[];
  currentBattleIndex: number;
  heroBattleResult: BattleResultType | null;
  rivalBattleResult: BattleResultType | null;
  hasRivalRequestedRestart: boolean;
  hasHeroRequestedRestart: boolean;
  setDifficulty: (difficulty: DifficultyType) => void;
  setPlayerType: (playerType: PlayerType) => void;
  setScore: (heroScore: number, rivalScore: number) => void;
  getExercises: () => void;
  startGame: () => void;
  startBattle: (exercise?: ExerciseDataType) => void;
  addScores: () => void;
  saveBattleResult: (result: BattleResultType, isRival: boolean) => void;
  endGame: () => void;
  endBattle: () => void;
  saveRestartRequest: () => void;
  abortGame: () => void;
};
