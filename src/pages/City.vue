<template>
  <div class="w-screen h-auto min-h-screen bg-[#f4f4f4]">
    <HomeHeader />
    <CityContainer :city-name="cityName" />
  </div>
</template>

<script lang="ts" setup>
import HomeHeader from '@components/Header/Home.vue'
import CityContainer from '@components/Container/City/Index.vue'
import { ref, reactive } from 'vue'

const cityName = ref('全部')
</script>
