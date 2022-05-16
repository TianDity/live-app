<template>
  <router-link :to="{ path: '/detail', query: {field: 'view', id: item.id} }">
    <div>
        <div>
          <img :src="item.img" alt="" class="w-full h-30">
        </div>
        <div>
          <div class="text-left truncate">{{ item.name }}</div>
          <div class="flex items-center text-lg color-[#ffd100]">
            <span class="mr-1">
              <Rate :value="item.star" />
            </span>
            <span class="text-sm">{{ item.score }}分</span>
          </div>
          <div class="flex justify-between text-sm items-center">
            <div>
              <span class="text-lg font-semibold mr-1 color-[#14b8a6]">￥{{ item.default_price }}</span>
              <span class="text-gray-500">起</span>
            </div>
            <div class="text-gray-500">{{ item.city_name }}</div>
          </div>
        </div>
    </div>
  </router-link>
</template>


<script setup lang="ts">
import Rate from '@components/Container/Common/Rate.vue';

interface Props {
  item: any;
}

const { item } = defineProps<Props>()
</script>
