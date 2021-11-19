import { action, makeObservable, observable } from 'mobx';
import { shuffle } from 'src/utils/helpers';
import { RootStore } from '..';
import { ExerciseDataType } from '../battleStore';
import { MessageType } from '../connectionStore';
import { exercises } from './exercises';
import {
  BattleResultType,
  DifficultyType,
  GameStoreType,
  PlayerType,
} from './types';

const BATTLES_AMOUNT = 10;
const REWARD_FOR_LIFE = 100;
const REWARD_FOR_SECOND = 100;
const START_LIFES_AMOUNT = 3;

export class GameStore implements GameStoreType {
  START_LIFES_AMOUNT = START_LIFES_AMOUNT;
  REWARD_FOR_SECOND = REWARD_FOR_SECOND;
  REWARD_FOR_LIFE = REWARD_FOR_LIFE;
  difficulty = DifficultyType.EASY;
  playerType = PlayerType.HOST;
  gameId = '';
  rootStore: RootStore;
  isGameEnded = false;
  heroScore = 0;
  rivalScore = 0;
  exercises: ExerciseDataType[] = [];
  currentBattleIndex = 0;
  heroBattleResult: BattleResultType | null;
  rivalBattleResult: BattleResultType | null;
  hasRivalRequestedRestart = false;
  hasHeroRequestedRestart = false;
  rivalLifesAmount = START_LIFES_AMOUNT;

  constructor({ rootStore }: { rootStore: RootStore }) {
    makeObservable(this, {
      difficulty: observable,
      playerType: observable,
      gameId: observable,
      isGameEnded: observable,
      heroScore: observable,
      rivalScore: observable,
      heroBattleResult: observable,
      rivalBattleResult: observable,
      hasRivalRequestedRestart: observable,
      hasHeroRequestedRestart: observable,
      rivalLifesAmount: observable,
      setDifficulty: action,
      setPlayerType: action,
      setScore: action,
      getExercises: action,
      startGame: action,
      startBattle: action,
      addScores: action,
      saveBattleResult: action,
      endGame: action,
      endBattle: action,
      saveRestartRequest: action,
      reduceRivalLifes: action,
      abortGame: action,
    });

    this.rootStore = rootStore;
    this.heroBattleResult = null;
    this.rivalBattleResult = null;
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
    this.exercises = shuffle(exercises[this.difficulty]).slice(
      0,
      BATTLES_AMOUNT,
    );
  };

  startGame = () => {
    this.setScore(0, 0);
    this.currentBattleIndex = 0;
    this.hasRivalRequestedRestart = false;
    this.hasHeroRequestedRestart = false;
    this.rivalLifesAmount = this.START_LIFES_AMOUNT;
    this.rootStore.pageStore.changePage('battle');
    if (this.playerType === PlayerType.HOST) {
      this.rootStore.connectionStore.sendMessage({
        type: MessageType.START_GAME,
      });
      this.getExercises();
      this.startBattle();
    }
  };

  startBattle = (exercise?: ExerciseDataType) => {
    this.rivalBattleResult = null;
    this.heroBattleResult = null;
    if (exercise) {
      this.rootStore.battleStore.startBattle(exercise);
    } else {
      const exercise = this.exercises[this.currentBattleIndex];
      this.rootStore.connectionStore.sendMessage({
        type: MessageType.START_BATTLE,
        exercise,
      });
      this.rootStore.battleStore.startBattle(exercise);
    }
  };

  addScores = () => {
    this.heroScore +=
      this.heroBattleResult?.lifesLeft && this.heroBattleResult?.secondsLeft
        ? this.heroBattleResult.lifesLeft * REWARD_FOR_LIFE +
          this.heroBattleResult.secondsLeft * REWARD_FOR_SECOND
        : 0;
    this.rivalScore +=
      this.rivalBattleResult?.lifesLeft && this.rivalBattleResult?.secondsLeft
        ? this.rivalBattleResult.lifesLeft * REWARD_FOR_LIFE +
          this.rivalBattleResult.secondsLeft * REWARD_FOR_SECOND
        : 0;
  };

  saveBattleResult = (result: BattleResultType, isRival = false) => {
    if (isRival) {
      this.rivalBattleResult = result;
      if (this.heroBattleResult) this.endBattle();
    } else {
      this.rootStore.connectionStore.sendMessage({
        type: MessageType.FINISH_EXERCISE,
        ...result,
      });
      this.heroBattleResult = result;
      if (this.rivalBattleResult) this.endBattle();
    }
  };

  endGame = () => {
    this.isGameEnded = true;
    this.rootStore.pageStore.changePage('battleInfo');
  };

  endBattle = () => {
    this.currentBattleIndex++;
    this.addScores();
    if (
      this.currentBattleIndex >= BATTLES_AMOUNT &&
      this.playerType === PlayerType.HOST
    ) {
      this.rootStore.connectionStore.sendMessage({
        type: MessageType.END_GAME,
      });
      this.endGame();
    }
  };

  saveRestartRequest = (isRival = false) => {
    if (isRival) {
      this.hasRivalRequestedRestart = true;
    } else {
      this.hasHeroRequestedRestart = true;
      this.rootStore.connectionStore.sendMessage({
        type: MessageType.REQUEST_RESTART,
      });
    }
    if (
      this.hasHeroRequestedRestart &&
      this.hasRivalRequestedRestart &&
      this.playerType === PlayerType.HOST
    ) {
      this.startGame();
    }
  };

  reduceRivalLifes = () => {
    this.rivalLifesAmount--;
  };

  abortGame = () => {
    this.rootStore.pageStore.changePage('mainMenu');
    this.rootStore.connectionStore.closeConnection();
    this.gameId = '';
  };
}
