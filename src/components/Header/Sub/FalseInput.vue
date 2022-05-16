<template>
  <div class="basis-5/6 h-10 bg-white rd-2px">
    <router-link :to="{ path: '/search' }">
        <font-awesome-icon :icon="['fas', 'magnifying-glass']" class="text-gray-400 mr-2"/>
        <span class="text-gray-400 leading-10">{{ searchText }}</span>
    </router-link>
  </div>
</template>

<script lang="ts">
export default {
  name: 'FalseInput',
}
</script>

<script lang="ts" setup>
import { ref } from 'vue';

const searchText = ref('美食/景点/酒店/按摩/KTV');
</script>
