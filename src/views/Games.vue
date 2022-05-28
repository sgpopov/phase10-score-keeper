<script setup lang="ts">
import { useGamesStore } from '@/stores/games';
import { computed } from 'vue';
import { useRouter } from 'vue-router';
import IconDelete from '../components/icons/IconDelete.vue';

const router = useRouter();
const store = useGamesStore();

const games = store.getAll;

const haveGames = computed(() => games.length > 0);

const formatDate = (dateTime: string) => {
  const date = new Date(dateTime);

  return date.toLocaleDateString();
};

const deleteGame = (gameId: string) => {
  store.deleteGame(gameId);
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
        <div class="w-1/2 text-gray-700 text-lef">Started At</div>
        <div class="w-1/4 text-gray-700 text-center"># Rounds</div>
        <div class="w-1/4 text-gray-700 text-center"># Players</div>
        <div class="w-1/12 text-gray-700 text-center"></div>
      </div>

      <div v-for="game in games" :key="game.id" class="flex px-4 py-4">
        <div
          class="w-1/2 text-gray-700 text-left cursor-pointer"
          @click="viewGameDetails(game.id)"
        >
          {{ formatDate(game.startedAt) }}
        </div>
        <div class="w-1/4 text-gray-700 text-center">{{ game.rounds }}</div>
        <div class="w-1/4 text-gray-700 text-center">
          {{ game.players.length }}
        </div>
        <div class="w-1/12 justify-end">
          <IconDelete
            class="w-5 h-5 fill-red-600 cursor-pointer"
            @click="deleteGame(game.id)"
          />
        </div>
      </div>
    </div>
  </div>
</template>
