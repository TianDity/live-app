<template>
  <div class="flex px-2 py-3 bg-white text-gray-700 b-b-1 b-gray-200">
    <span>当前选择：</span>
    <span class="mr-2">
      <font-awesome-icon :icon="['fas', 'location-dot']" class="color-[#aeaeae]"/>
    </span>
    <span>{{ cityName }}</span>
  </div>
</template>

<script setup lang="ts">
interface Props {
  cityName: string;
}

defineProps<Props>()
</script>
