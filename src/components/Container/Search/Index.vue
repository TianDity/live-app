<template>
  <div class="pb-10">
    <ViewCard v-if="listData.viewDatas.length > 0" title="搜索景点" show="grid" :data="listData.viewDatas" />
    <FoodCard v-if="listData.foodDatas.length > 0" title="搜索美食" show="flex" :data="listData.foodDatas" />
    <HotelCard v-if="listData.hotelDatas.length > 0" title="搜索酒店" show="flex" :data="listData.hotelDatas" />
    <MassageCard v-if="listData.massageDatas.length > 0" title="搜索按摩" show="flex" :data="listData.massageDatas" />
    <KtvCard v-if="listData.ktvDatas.length > 0" title="搜索KTV" show="flex" :data="listData.ktvDatas" />
  </div>
</template>

<script lang="ts">
export default {
  name: 'SearchContainer',
}
</script>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue';
const ViewCard = defineAsyncComponent(() => import('@components/Container/Common/Card/View/Index.vue'));
const FoodCard = defineAsyncComponent(() => import('@components/Container/Common/Card/Food/Index.vue'));
const HotelCard = defineAsyncComponent(() => import('@components/Container/Common/Card/Hotel/Index.vue'));
const MassageCard = defineAsyncComponent(() => import('@components/Container/Common/Card/Massage/Index.vue'));
const KtvCard = defineAsyncComponent(() => import('@components/Container/Common/Card/Ktv/Index.vue'));

interface Props {
  listData: any;
}

defineProps<Props>()

</script>
