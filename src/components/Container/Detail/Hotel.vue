<template>
  <div class="pb-10">
    <div class="py-2 bg-white">
      <IntroText :title="name" :icon-name="['fas', 'mountain-sun']" />
      <IntroCustom :icon-name="['fas', 'medal']">
        <span>
          <Rate :value="starNum" class="text-5 h-6 mr-1"/>
        </span>
        <span class="color-[#edcb00]">{{ score }}分</span>
      </IntroCustom>
      <IntroText :title="address" :icon-name="['fas', 'location-dot']" />
      <IntroCustom :icon-name="['fas', 'wallet']" >
        <span class="color-[#e85308]">￥</span>
        <span class="font-bold mr-1 color-[#e85308]">{{ score }}</span>
        <span>元起</span>
      </IntroCustom>
    </div>
    <div class="bg-white">
      <IntroCustomCard title="商家服务" :icon-name="['fas', 'list']">
        <ServiceList :service-list="service" />
      </IntroCustomCard>
    </div>
  </div>
</template>

<script setup lang="ts">
import IntroCustomCard from './Sub/IntroCustomCard.vue'
import IntroText from './Sub/IntroText.vue'
import IntroCustom from './Sub/IntroCustom.vue'
import Rate from '@components/Container/Common/Rate.vue'
import ServiceList from '@components/Container/Detail/Common/ServiceList.vue'


interface Props {
  name: string;
  starNum: number;
  score: string;
  address: string;
  price: number;
  service: {
    parking: boolean;
    wifi: boolean;
  };
}

const { service } = defineProps<Props>()

</script>
