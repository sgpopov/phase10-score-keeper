import { defineStore } from 'pinia';

type RootState = {
  games: Game[];
};

type Game = {
  id: string;
  rounds: number;
  startedAt: Date;
  completedAt: Date | null;
  players: Players[];
};

type Rounds = {
  round: number;
  score: number;
  phaseCompleted: boolean;
};

type Players = {
  name: string;
  score: number;
  phase: number;
  rounds: Rounds[];
};

export const useCounterStore = defineStore({
  id: 'games',

  state: () =>
    ({
      games: [],
    } as RootState),

  getters: {
    // doubleCount: state => state.counter * 2,
  },

  actions: {
    createNew(players: Players[]) {
      this.games.push({
        id: '',
        rounds: 0,
        startedAt: new Date(),
        completedAt: null,
        players,
      });
    },
  },
});
