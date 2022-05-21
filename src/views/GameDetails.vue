<script setup lang="ts">
import { useGamesStore } from '@/stores/games';
import { useRoute } from 'vue-router';
import phases from '../assets/phases.json';
import Button from '../components/forms/Button.vue';

const route = useRoute();
const store = useGamesStore();

const gameId: string = route.params.id as string;
const game = store.getGameById(gameId);

const playerPhase = (phaseId: number) => {
  const phase = phases.find(phase => phase.phase === phaseId);

  return phase?.name;
};

const styles = {
  orange: ['bg-orange-400'],
  teal: ['bg-teal-400'],
  yellow: ['bg-yellow-400'],
  sky: ['bg-sky-400'],
  rose: ['bg-rose-400'],
  violet: ['bg-violet-400'],
};

const playerColor = () => {
  const colors = Object.keys(styles);
  const name = colors[Math.floor(Math.random() * colors.length)];

  return styles[name];
};
</script>

<template>
  <div class="my-2 rounded overflow-hidden shadow-md">
    <div class="flex bg-gray-100 px-4 py-4">
      <div class="w-6/12 text-gray-700 text-lef">Round {{ game?.rounds }}</div>
      <div class="w-4/6 text-gray-700 text-right">Score</div>
    </div>

    <div
      class="flex px-4 py-2 items-center"
      v-for="(player, idx) in game?.players"
      :key="idx"
    >
      <div class="w-6/12 flex">
        <span
          class="w-8 h-8 inline-flex justify-center items-center mr-2 rounded-full bg-green-300 self-center text-center"
          :class="playerColor()"
        >
          {{ player.name[0] }}
        </span>

        <div class="flex flex-col">
          <p class="text-sm font-bold">{{ player.name }}</p>
          <p class="hidden sm:block text-gray-600">
            {{ playerPhase(player.phase) }}
          </p>
        </div>
      </div>

      <div class="w-4/6 text-lg sm:text-xl font-bold text-right">
        {{ player.score }}
      </div>
    </div>

    <div class="flex border-t bg-gray-200 text-center">
      <div class="w-full flex justify-center px-2 py-2 text-center">
        <Button :rounded="true" color="blue">Add round</Button>
      </div>
    </div>
  </div>
</template>
