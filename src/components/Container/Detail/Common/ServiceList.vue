<template>
  <div class="px-2 text-gray-700">
    <div class="py-1">停车场： {{ serviceList.parking ? '有' : '无' }}</div>
    <div class="py-1">WIFI： {{ serviceList.wifi ? '有' : '无' }}</div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  serviceList: {
    parking: boolean,
    wifi: boolean,
  },
}

defineProps<Props>()
</script>
