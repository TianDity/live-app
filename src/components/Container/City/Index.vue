<template>
  <div>
    <Location :city-name="cityName"/>
    <CityMenu />
  </div>
</template>

<script setup lang="ts">
import CityMenu from './Sub/CityMenu.vue';
import Location from './Sub/Location.vue';

interface Props {
  cityName: string;
}

defineProps<Props>()
</script>
