<template>
  <BaseCard :card-title="title" :show="show">
    <KtvItem
      v-for="(item, index) of data"
      :key="item.id"
      :item="item"
    />
  </BaseCard>
</template>

<script lang="ts">
export default {
  name: 'Ktv',
}
</script>

<script setup lang="ts">
import { ref } from 'vue'
import BaseCard from '../Base.vue';
import KtvItem from './Sub.vue';

interface Props {
  data: any;
  show: string;
  title?: string;
}

const { data, show } = defineProps<Props>()

</script>
