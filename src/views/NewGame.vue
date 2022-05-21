<script setup lang="ts">
import NewGame from '../components/games/NewGame.vue';

type Player = {
  name: string;
};

const startGame = (players: Player[]) => {
  console.log('new game view: ');
  players.forEach(p => console.log(p.name));
};
</script>

<template>
  <NewGame @startGame="startGame" />
</template>
