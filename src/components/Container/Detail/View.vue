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
      <IntroText :title="openDateTime" :icon-name="['fas', 'calendar-days']" />
      <IntroText :title="tip" :icon-name="['fas', 'calendar-check']" />
    </div>
    <div class="bg-white">
      <IntroCard title="详细介绍" :icon-name="['fas', 'list']" :content="intro" />
    </div>
    <div class="bg-white">
      <IntroCard title="购票信息" :icon-name="['fas', 'list']" :content="ticketInfo" />
    </div>
  </div>
</template>

<script setup lang="ts">
import IntroCard from './Sub/IntroCard.vue'
import IntroText from './Sub/IntroText.vue'
import IntroCustom from './Sub/IntroCustom.vue'
import Rate from '@components/Container/Common/Rate.vue'


interface Props {
  name: string;
  starNum: number;
  score: string;
  address: string;
  price: number;
  openDateTime: string;
  tip: string;
  intro: string;
  ticketInfo: string;
}

const props= defineProps<Props>()

</script>
