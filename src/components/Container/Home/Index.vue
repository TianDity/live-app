<template>
  <div class="pb-5">
    <Category />
    <ViewCard title="推荐景点" show="grid" :data="indexData.homeDatas.viewDatas" />
    <FoodCard title="推荐美食" show="flex" :data="indexData.homeDatas.foodDatas" />
    <HotelCard title="推荐酒店" show="flex" :data="indexData.homeDatas.hotelDatas" />
    <MassageCard title="推荐按摩" show="flex" :data="indexData.homeDatas.massageDatas" />
    <KtvCard title="推荐KTV" show="flex" :data="indexData.homeDatas.ktvDatas" />
  </div>
</template>

<script setup lang="ts">
import { reactive, ref, onBeforeMount, defineAsyncComponent, watchEffect } from 'vue';
import { useCityStore } from '@/stores/city';
import indexModel from '@models/index';
import Category from '@components/Container/Home/Category/Index.vue'
const ViewCard = defineAsyncComponent(() => import('@components/Container/Common/Card/View/Index.vue'));
const FoodCard = defineAsyncComponent(() => import('@components/Container/Common/Card/Food/Index.vue'));
const HotelCard = defineAsyncComponent(() => import('@components/Container/Common/Card/Hotel/Index.vue'));
const MassageCard = defineAsyncComponent(() => import('@components/Container/Common/Card/Massage/Index.vue'));
const KtvCard = defineAsyncComponent(() => import('@components/Container/Common/Card/Ktv/Index.vue'));

interface DataType {
  homeDatas: ReqType;
}

interface ReqType {
  foodDatas?: object[];
  hotelDatas?: object[];
  ktvDatas?: object[];
  massageDatas?: object[];
  viewDatas?: object[];
}

let indexData = reactive<DataType>({
  homeDatas: {}
})

const cityStore = useCityStore();

watchEffect(async () => {
  let data = await indexModel.getHomeData(cityStore.cityId);

  indexData.homeDatas = data.data;
})

</script>
