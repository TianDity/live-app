<template>
  <div class="flex">
    <div
      v-for="(item, index) in max" :key="index"
      class="text-#d5d5d5 transition i-ic:baseline-star transform-gpu"
      :class="{
        'bg-#ffd100': hoverRate > 0 ? item <= hoverRate : item <= value,
        'cursor-pointer': !readonly,
        'hover:scale-115': !readonly
      }"
      @mousemove="!readonly && (hoverRate = item)"
      @mouseleave="!readonly && (hoverRate = 0)"
      @click="$emit('update:value', item)"
    /> 
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

defineProps({
  value: {
    default: 0,
  },
  max: {
    default: 5,
  },
  readonly: {
    default: true,
  }
})

defineEmits(['update:value'])

let hoverRate = ref(0);
</script>
