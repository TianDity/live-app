<template>
  <div class="w-full h-auto pb-1 bg-white">
    <template v-for="(item) of cityList">
      <div
        @click="handleCitySelector(item)"
        class="w-full px-4 py-2 text-left b-b-1 b-gray-200 menu-item text-gray-700"
      >{{ item.cityName }}</div>
    </template>
  </div>
</template>

<script setup lang="ts">
import cityList from '@assets/data/cities'
import { useCityStore } from '@/stores/city';
import { useRouter } from 'vue-router';

const cityStore = useCityStore();
const router = useRouter();

interface CityType {
  cityName: string;
  cityId: string;
  field: string;
}

const handleCitySelector = (data: CityType) => {
  cityStore.selectCity(data)
  router.push('/')
}

</script>

<style>
.menu-item:last-child {
  border-bottom: none;
}
</style>
