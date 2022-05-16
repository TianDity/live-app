<template>
  <router-link :to="{ path: '/detail', query: {field: 'hotel', id: item.id} }">
    <div class="flex mt-3">
        <div class="basis-1/3 h-28">
          <img :src="item.img" alt="" class="w-full h-full">
        </div>
        <div class="basis-2/3 pl-2 flex flex-col place-content-between">
          <div class="text-left">{{ item.name }}</div>
          <div class="text-left text-sm color-[#ffd100]">{{ item.score }}分</div>
          <div class="text-left text-sm text-gray-500">{{ item.area }}</div>
          <div class="flex justify-between text-sm text-gray-500 items-center">
            <div class="color-[#14b8a6]">
              <span>￥</span>
              <span class="text-lg mr-1">{{ item.default_price }}</span>
              <span>起</span>
            </div>
            <div>{{ item.city_name }}</div>
          </div> 
        </div>
    </div>
  </router-link>
</template>

<script setup lang="ts">
interface Props {
  item: any;
}

const { item } = defineProps<Props>()

</script>
