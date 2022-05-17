<template>
  <div class="w-full h-auto mt-3 pb-12 flex flex-col items-center bg-white">
    <div class="w-full">
      <img src="../../../assets/img/errorShow.png" alt="" class="w-full h-auto">
    </div>
    <div class="text-lg text-gray-500">加载失败</div>
    <div class="w-40% mt-2 py-2 rounded-full color-[#fff] bg-[#fa2c19]" @click="handleReload">
      <span class="px-1">
        <font-awesome-icon :icon="['fas', 'sync-alt']" />
      </span>
      <span class="px-1">重试</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
const router = useRouter();

const handleReload = () => {
  router.go(0)
}
</script>
