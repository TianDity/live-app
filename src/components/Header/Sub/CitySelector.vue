<template>
  <router-link to="/city">
    <div class="h-full">
      <span class="leading-10 text-gray-700">{{ cityStore.cityName }}</span>
      <font-awesome-icon
        :icon="['fas', 'angle-down']"
        class="pl-1 text-gray-700"
      />
    </div>
  </router-link>
</template>

<script lang="ts">
export default {
  name: 'CitySelector'
}
</script>

<script lang="ts" setup>
import { useCityStore } from '@stores/city';
const cityStore = useCityStore();
</script>
