<template>
  <router-link :to="{ path: '/detail', query: {field: 'ktv', id: item.id} }">
    <div class="flex mt-3">
        <div class="basis-1/3 h-28">
          <img :src="item.img" alt="" class="w-full h-full">
        </div>
        <div class="basis-2/3 pl-2 flex flex-col place-content-between">
          <div class="text-left">{{ item.name }}</div>
          <div class="flex items-center">
            <span class="mr-1">
                <Rate :value="item.star" class="text-base" />
            </span>
            <span class="text-base color-[#ffd100]">{{ item.star }}分</span>
          </div>
          <div class="flex justify-between text-sm text-gray-500 items-baseline">
            <div>
              <span class="color-[#14b8a6]">￥</span>
              <span class="text-lg color-[#14b8a6] mr-1">{{ item.default_price }}</span>
              <span>元起</span>
            </div>
            <div>{{ item.city_name }}</div>
          </div> 
        </div>
    </div>
  </router-link>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import Rate from '@components/Container/Common/Rate.vue';

interface Props {
  item: any;
}

const { item } = defineProps<Props>()

</script>
