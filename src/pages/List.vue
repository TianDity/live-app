<template>
  <div class="w-screen min-h-screen bg-[#f4f4f4]">
    <ListHeader nav-title="列表页" />
    <Tab :active-id="cityIdData" />
    <List :list-data="listData.list"/>  
  </div>
</template>


<script setup lang="ts">
import listModel from '@models/list'
import { ref, reactive, provide, onBeforeMount, defineAsyncComponent, watchEffect } from 'vue';
import { useRoute } from 'vue-router'
import ListHeader from '@components/Header/Common.vue'
import Tab from '@components/Tab/Index.vue'
import { injectCityId } from '@utils/key';
const List = defineAsyncComponent(() => import('@components/Container/List/Index.vue'));

let listData = reactive({
  list: []
})

const { query } = useRoute()
const { cityId, field } = query

let cityIdData = ref(cityId as string)

const changeCityId = (data: string) => {
  cityIdData.value = data
}

provide(injectCityId, {
  state: cityIdData,
  updateState: changeCityId
})

watchEffect(async () => {
  let data = await listModel.getListData(cityIdData.value as string, field as string);

  listData.list = data.data;
})

</script>
