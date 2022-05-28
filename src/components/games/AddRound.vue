<script setup lang="ts">
import { ref } from 'vue';
import type { Game } from '@/stores/games';
import Button from '../forms/Button.vue';
import TextField from '../forms/TextField.vue';
import IconMinus from '../icons/IconMinus.vue';
import IconPlus from '../icons/IconPlus.vue';
import IconStar from '../icons/IconStar.vue';
import type { PlayerScore } from '@/types/global';

interface Props {
  game: Game;
}

interface Emits {
  (e: 'addRound', value: PlayerScore[]): void;
  (e: 'cancel'): void;
}

const emit = defineEmits<Emits>();

const props = defineProps<Props>();

const scores = ref<PlayerScore[]>(
  props.game.players.map(player => {
    return {
      name: player.name,
      phase: player.phase,
      score: 0,
    };
  }),
);

const decreasePhase = (player: PlayerScore) => {
  if (player.phase === 0) {
    return;
  }

  player.phase -= 1;
};

const increasePhase = (player: PlayerScore) => {
  if (player.phase === 11) {
    return;
  }

  player.phase += 1;
};

const save = () => {
  const data = scores.value.map(score => {
    score.phase *= 1;
    score.score *= 1;

    return score;
  });

  emit('addRound', data);
};

const cancel = () => {
  emit('cancel');
};
</script>

<template>
  <div class="bg-white shadow overflow-hidden sm:rounded-lg">
    <div class="px-4 py-5 sm:px-6">
      <h3 class="text-lg leading-6 font-medium text-gray-900">Add round</h3>
    </div>
    <div class="flex bg-gray-100 px-4 py-4">
      <div class="w-8/12 text-gray-700 text-lef">Player</div>
      <div class="w-2/6 text-gray-700 text-center">Phase</div>
      <div class="w-2/6 text-gray-700 text-center">Score</div>
    </div>
    <div class="border-t border-gray-200">
      <div
        class="flex px-4 py-2 items-center"
        v-for="(player, idx) in scores"
        :key="idx"
      >
        <div class="w-8/12 flex items-center">
          <span
            class="w-8 h-8 inline-flex justify-center items-center mr-2 rounded-full bg-green-300 self-center text-center"
          >
            {{ player.name[0] }}
          </span>
          <span class="pl-2 text-sm font-bold">{{ player.name }}</span>
        </div>

        <div class="w-2/6 text-lg sm:text-xl font-bold text-center">
          <div class="px-2 flex justify-center">
            <IconMinus
              class="w-6 h-6 cursor-pointer"
              @click="decreasePhase(player)"
            />
            <span class="px-5">{{ player.phase }}</span>
            <IconPlus
              v-if="player.phase < 10"
              class="w-6 h-6 cursor-pointer"
              @click="increasePhase(player)"
            />
            <IconStar
              v-if="player.phase === 10"
              class="w-6 h-6 cursor-pointer"
              @click="increasePhase(player)"
            />
          </div>
        </div>

        <div class="w-2/6 text-lg sm:text-xl font-bold text-right">
          <div class="px-2">
            <TextField
              type="number"
              v-model="player.score"
              min="5"
              :step="5"
              inputmode="numeric"
              pattern="[0-9]*"
            />
          </div>
        </div>
      </div>

      <div class="flex border-t bg-gray-200 text-center">
        <div class="w-full flex justify-between px-2 py-2 text-center">
          <Button :rounded="true" color="blue" @click="cancel()">Cancel</Button>
          <Button :rounded="true" color="green" @click="save()">Save</Button>
        </div>
      </div>
    </div>
  </div>
</template>
