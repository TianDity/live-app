<template>
  <div class="flex px-2 py-5 bg-white">
    <CategoryItem
      v-for="(item, idx) of categoryList"
      :key="item.id"
      :item="item"
    />
  </div>
</template>

<script lang="ts">
export default {
  name: 'Category'
}
</script>


<script setup lang="ts">
import CategoryItem from './Sub.vue'
import categoryData from '@assets/data/fields'
import { reactive } from 'vue'

const categoryList = reactive(categoryData)

</script>
