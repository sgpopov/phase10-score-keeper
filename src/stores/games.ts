import type { PlayerScore } from '@/types/global';
import { useLocalStorage } from '@vueuse/core';
import { defineStore } from 'pinia';
import { v4 as uuidv4 } from 'uuid';

export type Game = {
  id: string;
  rounds: number;
  startedAt: string;
  completedAt: string | null;
  players: Players[];
};

export type Rounds = {
  phase: number;
  score: number;
  phaseCompleted: boolean;
};

export type Players = {
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
    getAll: state => {
      return state.games;
    },

    getGameById: state => {
      return (gameId: string) => state.games.find(game => game.id === gameId);
    },
  },

  actions: {
    createNew(players: Players[]) {
      const game = {
        id: uuidv4(),
        rounds: 1,
        startedAt: new Date().toISOString(),
        completedAt: null,
        players,
      };

      this.games.push(game);

      return game;
    },

    deleteGame(id: string) {
      const gameIndex = this.games.findIndex(game => game.id === id);

      if (gameIndex < 0) {
        throw Error('Game not found');
      }

      this.games.splice(gameIndex, 1);
    },

    addRound(gameId: string, scores: PlayerScore[]) {
      const game = this.games.find(game => game.id === gameId);

      if (!game) {
        throw Error('Game not found');
      }

      const players = game.players.map(player => {
        const roundScore = scores.find(score => score.name === player.name);

        if (!roundScore) {
          return player;
        }

        const rounds: Rounds[] = [
          ...player.rounds,
          ...[
            {
              phase: roundScore.phase,
              score: roundScore.score,
              phaseCompleted: player.phase < roundScore.phase,
            },
          ],
        ];

        return {
          name: player.name,
          phase: roundScore.phase,
          score: player.score + roundScore.score,
          rounds,
        };
      });

      game.rounds += 1;
      game.players = players;

      return game;
    },
  },
});
