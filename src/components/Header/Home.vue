<template>
  <div class="flex justify-between h-14 px-2 py-2 bg-[#ffd100] sticky top-0 z-50">
    <CitySelector />
    <FalseInput />
  </div>
</template>


<script lang="ts">
export default {
  name: 'Home'
}
</script>

<script lang="ts" setup>
import CitySelector from './Sub/CitySelector.vue'
import FalseInput from './Sub/FalseInput.vue'

</script>
