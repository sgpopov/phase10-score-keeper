<script setup lang="ts">
import { useGamesStore } from '@/stores/games';

import NewGame from '../components/games/NewGame.vue';
import router from '../router/index';

const store = useGamesStore();

type Player = {
  name: string;
};

const startGame = (players: Player[]) => {
  const data = players.map(player => {
    return {
      name: player.name,
      score: 0,
      phase: 1,
      rounds: [],
    };
  });

  const game = store.createNew(data);

  router.push({
    name: 'game-details',
    params: {
      id: game.id,
    },
  });
};
</script>

<template>
  <NewGame @startGame="startGame" />
</template>
