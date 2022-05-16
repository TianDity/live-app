<template>
  <BaseCard :card-title="title" :show="show">
    <ViewItem
      v-for="(item, index) of data"
      :key="item.id"
      :item="item"
    />
  </BaseCard>
</template>


<script setup lang="ts">
import BaseCard from '../Base.vue';
import ViewItem from './Sub.vue'

interface Props {
  data: any;
  show: string;
  title?: string;
}

const { data, show } = defineProps<Props>()

</script>
