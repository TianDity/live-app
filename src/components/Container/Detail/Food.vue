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
    </div>
    <div class="bg-white">
      <IntroCard title="推荐菜品" :icon-name="['fas', 'list']" :content="recomData" />
    </div>
    <div class="bg-white">
      <IntroCustomCard title="关键评论词" :icon-name="['fas', 'list']">
        <Labels :tag-list="commentKeywordData" />
      </IntroCustomCard>
    </div>
  </div>
</template>

<script setup lang="ts">
import IntroCard from './Sub/IntroCard.vue'
import IntroText from './Sub/IntroText.vue'
import IntroCustom from './Sub/IntroCustom.vue'
import IntroCustomCard from './Sub/IntroCustomCard.vue'
import Rate from '@components/Container/Common/Rate.vue'
import Labels from '@components/Container/Detail/Common/Labels.vue'
import { computed } from 'vue'


interface Props {
  name: string;
  starNum: number;
  score: string;
  address: string;
  price: number;
  openDateTime: string;
  recom: string;
  commentKeyword: string;
}

const props = defineProps<Props>()

const recomData = computed(() => {
  return props.recom.replaceAll(',', '，')
})

const commentKeywordData = computed(() => {
  return props.commentKeyword.split(',')
})

</script>
