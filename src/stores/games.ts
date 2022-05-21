import { defineStore } from 'pinia';

type Game = {
  id: string;
  rounds: number;
  startedAt: string;
  completedAt: string | null;
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

  state: () => ({
    games: [],
  }),

  getters: {
    // doubleCount: state => state.counter * 2,
  },

  actions: {
    createNew(players: Players) {
      this.games.push({
        id: 123,
        rounds: 0,
        startedAt: Date.now(),
        completedAt: null,
        players,
      });
    },
  },
});
