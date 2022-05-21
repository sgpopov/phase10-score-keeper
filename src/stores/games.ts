import { defineStore } from 'pinia';
import { useLocalStorage } from '@vueuse/core';
import { v4 as uuidv4 } from 'uuid';

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

export const useGamesStore = defineStore({
  id: 'games',

  state: () => ({
    games: useLocalStorage<Game[]>('games', []),
  }),

  getters: {
    getGameById: state => {
      return (gameId: string) => state.games.find(game => game.id === gameId);
    },
  },

  actions: {
    createNew(players: Players[]) {
      const game = {
        id: uuidv4(),
        rounds: 1,
        startedAt: new Date(),
        completedAt: null,
        players,
      };

      this.games.push(game);

      return game;
    },
  },
});
