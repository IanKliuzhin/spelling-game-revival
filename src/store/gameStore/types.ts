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
