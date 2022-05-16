<template>
  <router-link :to="{ path: '/list', query: {cityId: cityStore.cityId, field: item.field} }">
    <div class="basis-1/5 px-2">
      <div>
        <img class="w-full" :src="getImg(item.field)" alt="">
        <div class="text-gray-600 text-sm font-semibold">{{ item.iconText }}</div>
      </div>
    </div>
  </router-link>
</template>

<script setup lang="ts">
import { useCityStore } from '@stores/city';
const cityStore = useCityStore();

interface Props {
  item: any;
}

const { item } = defineProps<Props>()

const getImg = (name: string) => {
  const path = `/src/assets/img/${name}.png`

  const modules = import.meta.globEager('/src/assets/img/*.png')

  return modules[path].default
}
</script>
