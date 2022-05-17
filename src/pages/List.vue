<template>
  <div class="w-screen min-h-screen bg-[#f4f4f4]">
    <ListHeader nav-title="列表页" />
    <Tab :active-id="cityIdData" />
    <template v-if="errorShow === false">
      <List :list-data="listData.list"/>  
    </template>
    <template v-if="errorShow === true">
      <ErrorShow />
    </template>
  </div>
</template>


<script setup lang="ts">
import listModel from '@models/list'
import { ref, reactive, provide, onBeforeMount, defineAsyncComponent, watchEffect } from 'vue';
import { useRoute } from 'vue-router'
import ListHeader from '@components/Header/Common.vue'
import Tab from '@components/Tab/Index.vue'
import ErrorShow from '@/components/Container/Common/ErrorShow.vue';
import { injectCityId } from '@utils/key';
const List = defineAsyncComponent(() => import('@components/Container/List/Index.vue'));

let listData = reactive({
  list: []
})

const { query } = useRoute()
const { cityId, field } = query

let cityIdData = ref(cityId as string)

let errorShow = ref(false)

const changeCityId = (data: string) => {
  cityIdData.value = data
}

provide(injectCityId, {
  state: cityIdData,
  updateState: changeCityId
})

watchEffect(async () => {
  try {
    let data = await listModel.getListData(cityIdData.value as string, field as string);

    if (data.status === 0) {
      listData.list = data.data;
    }
  } catch (error) {
    errorShow.value = true
  }
})

</script>
