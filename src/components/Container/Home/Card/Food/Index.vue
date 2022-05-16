<template>
  <BaseCard card-title="推荐美食" :show="show">
      <FoodItem
        v-for="(item, index) of data"
        :key="item.id"
        :item="item"
      />
  </BaseCard>
</template>

<script lang="ts">
export default {
  name: 'Food',
}
</script>

<script setup lang="ts">
import { ref, computed } from 'vue'
import BaseCard from '../Base.vue';
import FoodItem from './Sub.vue';

interface Props {
  data: any;
  show: string;
}

const { data, show } = defineProps<Props>()

</script>
