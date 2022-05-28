<script setup lang="ts">
import { useGamesStore } from '@/stores/games';
import { computed } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const store = useGamesStore();

const games = store.getAll;

const haveGames = computed(() => games.length > 0);

const formatDate = (dateTime: string) => {
  const date = new Date(dateTime);

  return date.toLocaleDateString();
};

const viewGameDetails = (gameId: string) => {
  router.push({
    name: 'game-details',
    params: {
      id: gameId,
    },
  });
};
</script>

<template>
  <div>
    <div v-if="!haveGames">No games recorded</div>

    <div v-if="haveGames">
      <div class="flex bg-gray-100 px-4 py-4">
        <div class="w-8/12 text-gray-700 text-lef">Started At</div>
        <div class="w-2/6 text-gray-700 text-center"># Rounds</div>
        <div class="w-2/6 text-gray-700 text-center"># Players</div>
      </div>

      <div
        v-for="game in games"
        :key="game.id"
        class="flex px-4 py-4"
        @click="viewGameDetails(game.id)"
      >
        <div class="w-8/12 text-gray-700 text-lef">
          {{ formatDate(game.startedAt) }}
        </div>
        <div class="w-2/6 text-gray-700 text-center">{{ game.rounds }}</div>
        <div class="w-2/6 text-gray-700 text-center">
          {{ game.players.length }}
        </div>
      </div>
    </div>
  </div>
</template>
