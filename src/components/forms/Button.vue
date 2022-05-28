<script setup lang="ts">
import { computed } from 'vue';

interface Props {
  disabled?: true | false;
  color?: 'blue' | 'green';
  rounded?: true | false;
}

const props = defineProps<Props>();

const blueStyles = computed(() => {
  const styles = ['text-white', 'bg-indigo-600'];

  if (!props.disabled) {
    styles.push('bg-indigo-600');
    styles.push('hover:bg-indigo-700');
  }

  if (props.disabled) {
    styles.push('bg-indigo-300');
  }

  return styles;
});

const greenStyles = computed(() => {
  const styles = ['text-white'];

  if (!props.disabled) {
    styles.push('bg-emerald-600');
    styles.push('hover:bg-emerald-700');
  }

  if (props.disabled) {
    styles.push('bg-emerald-300');
  }

  return styles;
});

const styles = computed(() => {
  const base = [
    'whitespace-nowrap',
    'inline-flex',
    'items-center',
    'justify-center',
    'px-4',
    'py-2',
    'border',
    'border-transparent',
    'shadow-sm',
    'text-base',
    'font-medium',
    ...(props.color === 'blue' ? blueStyles.value : []),
    ...(props.color === 'green' ? greenStyles.value : []),
  ];

  if (props.disabled) {
    base.push('cursor-not-allowed');
  }

  if (props.rounded) {
    base.push('rounded-md');
  }

  return base;
});
</script>

<template>
  <button :class="styles" :disabled="props.disabled">
    <slot />
  </button>
</template>
