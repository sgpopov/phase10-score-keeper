<script setup lang="ts">
import { computed, ref } from 'vue';
import TextField from '../forms/TextField.vue';
import Button from '../forms/Button.vue';

type Player = {
  name: string;
};

interface Emits {
  (e: 'startGame', value: Player[]): void;
}

const emit = defineEmits<Emits>();

const players = ref<Player[]>([]);

const addPlayer = () => {
  players.value.push({ name: '' });
};

const canAddPlayers = computed<boolean>(() => {
  return players.value.length <= 5;
});

const canStartGame = computed<boolean>(() => {
  return players.value.length > 0 && players.value.every(p => !!p.name);
});

const havePlayers = computed<boolean>(() => {
  return players.value.length > 0;
});

const startGame = () => {
  emit('startGame', players.value);
};
</script>

<template>
  <main>
    <div class="bg-white shadow overflow-hidden sm:rounded-lg">
      <div class="px-4 py-5 sm:px-6">
        <h3 class="text-lg leading-6 font-medium text-gray-900">New Game</h3>
        <p class="mt-1 max-w-2xl text-sm text-gray-500">
          You can add up to 6 players
        </p>
      </div>
      <div class="border-t border-gray-200">
        <div class="px-4 py-5 sm:px-6" v-if="!havePlayers">
          No players added to the game. Click the button bellow to add one.
        </div>
        <dl>
          <div
            v-for="(player, idx) in players"
            :key="idx"
            class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 align-middle"
          >
            <dt class="text-sm font-medium text-gray-500">
              Player {{ idx + 1 }}
            </dt>
            <dd class="mt-1 text-sm sm:mt-0 sm:col-span-2">
              <TextField type="text" v-model="player.name" />
            </dd>
          </div>

          <div class="bg-gray-50 px-4 py-5 sm:gap-4 sm:px-6">
            <div class="flex justify-between">
              <Button
                v-if="canAddPlayers"
                @click="addPlayer"
                color="blue"
                :rounded="true"
              >
                Add player
              </Button>

              <Button
                color="green"
                :disabled="!canStartGame"
                :rounded="true"
                @click="startGame"
              >
                Start Game
              </Button>
            </div>
          </div>
        </dl>
      </div>
    </div>
  </main>
</template>
