import { action, makeObservable, observable } from 'mobx';

export type CharacterDataType = {
  points: number;
  counterLife: number;
};

export type ExerciseDataType = {
  word: string;
  voiceActing: string;
};

export type TimerType = number;

export class BattleStore {
  listCharacter: CharacterDataType[];

  constructor() {
    this.listCharacter = [
      {
        points: 500,
        counterLife: 3,
      },
      {
        points: 200,
        counterLife: 2,
      },
    ];
  }
}
