<template>
  <router-link :to="{ path: '/detail', query: {field: 'food', id: item.id} }">
    <div class="flex mt-3">
        <div class="basis-1/3 h-30">
          <img :src="item.img" alt="" class="w-full h-full">
        </div>
        <div class="basis-2/3 pl-2 flex flex-col place-content-between">
          <div class="text-left">{{ item.name }}</div>
          <div class="flex items-center">
            <span>
                <Rate :value="item.star" class="text-base" />
            </span>
            <span class="text-base text-gray-500">￥{{ item.default_price }} /人</span>
          </div>
          <div class="h-8 overflow-hidden">
            <Tags :tag-list="keyword" />
          </div>
          <div class="flex justify-between text-sm text-gray-500">
            <span>{{ item.field }}</span>
            <span>{{ item.city_name }}</span>
          </div> 
        </div>
    </div>
  </router-link>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import Rate from '@components/Container/Common/Rate.vue';
import Tags from '@components/Container/Common/Tags.vue';

interface Props {
  item: any;
}

interface widthProps {
  imgWidth: string;
  textWidth: string;
}

const { item } = defineProps<Props>()

const keyword = computed(() => {
  const arr = item.keyword.split(',')
  let str = '', tagIdx = 0;

  if (item.keyword.length <= 15) {
    return arr
  }

  arr.forEach((item: string, idx: number, arr: string[]) => {
    if (str.length < 15) {
      str += item
      tagIdx++
    }
  })

  return arr.filter((item: string, idx: number) => {
    return tagIdx == 0 ? idx <= tagIdx : idx <= --tagIdx;
  })
})

</script>
