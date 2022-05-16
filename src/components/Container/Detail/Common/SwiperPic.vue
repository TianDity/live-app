<template>
  <Swiper
    :modules="modules"
    navigation
    :pagination="{ clickable: true }"
  >
    <template
      v-for="(item) of imgData"
      class="w-screen"
    >
      <SwiperSlide class="w-screen max-h-60">
        <img :src="item" alt="" class="w-screen h-full">
      </SwiperSlide>
    </template>
  </Swiper>
</template>

<script setup lang="ts">
import { Pagination, A11y } from 'Swiper'
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import { ref } from 'vue';

import 'swiper/css'
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface Props {
  imgData: any;
}

const { imgData } = defineProps<Props>()

const modules = ref([
  Pagination,
  A11y,
]);

</script>

<style>
.swiper-pagination-bullet-active {
  background-color: #fff;
}

.swiper-slide {
  height: 240px !important;
}
</style>
