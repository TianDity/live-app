<template>
  <div class="w-full h-10 overflow-x-scroll whitespace-nowrap tabDiv">
    <TabItem
      v-for="(item, idx) of cityData"
      :item="item"
      :active-id="activeId"
    />
  </div>
</template>

<script setup lang="ts">
import TabItem from './Sub.vue'
import cityData from '@assets/data/cities'

interface Props {
  activeId: string;
}

const { activeId } = defineProps<Props>()

</script>

<style>
.tabDiv::-webkit-scrollbar {
display: none;
}
.tabDiv::-webkit-scrollbar-thumb {
display: none;
}
</style>
