<script setup lang="ts">
import { useGamesStore } from '@/stores/games';
import type { PlayerScore } from '@/types/global';
import { useRoute, useRouter } from 'vue-router';
import AddRound from '../components/games/AddRound.vue';

const router = useRouter();
const route = useRoute();
const store = useGamesStore();

const gameId: string = route.params.id as string;

const game = store.getGameById(gameId);

if (!game) {
  router.push('/');
}

const onRoundAdded = async (scores: PlayerScore[]) => {
  store.addRound(gameId, scores);

  router.push({
    name: 'game-details',
    params: {
      id: gameId,
    },
  });
};

const onCancel = () => {
  router.push({
    name: 'game-details',
    params: {
      id: gameId,
    },
  });
};
</script>

<template>
  <AddRound
    v-if="game"
    :game="game"
    @add-round="onRoundAdded"
    @cancel="onCancel"
  />
</template>
