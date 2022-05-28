<script setup lang="ts">
interface Props {
  label?: string | boolean;
  id?: string;
  type: 'text' | 'number';
  modelValue: string | number;
  min?: string;
  max?: string;
  step?: number;
}

interface Emits {
  (e: 'update:modelValue', value: string | number): void;
}

const props = defineProps<Props>();
const emit = defineEmits<Emits>();

const onValueChange = (event: Event) => {
  emit('update:modelValue', (event.target as any).value);
};
</script>

<template>
  <div>
    <label
      v-if="props.label"
      for="first-name"
      class="block text-sm font-medium text-gray-700"
      >{{ props.label }}</label
    >
    <input
      :type="props.type"
      name="first-name"
      :value="props.modelValue"
      id="first-name"
      autocomplete="given-name"
      class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
      :min="props.min"
      :step="props.type === 'number' ? props.step : undefined"
      v-bind="$attrs"
      @input="onValueChange"
    />
  </div>
</template>
