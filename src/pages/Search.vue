<template>
  <div class="w-screen min-h-screen bg-[#f4f4f4]">
    <SearchInput v-model="inputText"
      @update:model-value="updateInputText"
    />
    <template v-if="emptyState === false && errorShow === false">
      <SearchContainer
        v-if="inputText && inputText.length > 0"
        :list-data="searchData.data"
      />
    </template>
    <template v-if="emptyState === true">
      <Empty />
    </template>
    <template v-if="errorShow === true">
      <ErrorShow />
    </template>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, watch } from 'vue';
import searchModel from '@models/search';
import SearchInput from '@components/SearchInput/Index.vue'
import SearchContainer from '@components/Container/Search/Index.vue'
import Empty from '@components/Container/Common/Empty.vue';
import ErrorShow from '@components/Container/Common/ErrorShow.vue';
import { useCityStore } from '@/stores/city';
import { useThrottleFn } from '@vueuse/core'

const cityStore = useCityStore();

let searchData = reactive({
  data: {
    viewDatas: [],
    foodDatas: [],
    hotelDatas: [],
    massageDatas: [],
    ktvDatas: []
  }
})

let inputText = ref('')
let searchState = ref(false)
let emptyState = ref(false)
let errorShow = ref(false)

const updateInputText = useThrottleFn((data: string) => {
  searchState.value = !searchState.value
}, 1000)

watch(searchState, (newValue, oldValue) => {
  const searchText = inputText.value.trim()
  if (inputText.value.length > 0 && newValue !== oldValue) {
      let res = async () => {
        try {
          let data = await searchModel.searchAction(searchText, cityStore.cityId);
          
          let state = data.data && Object.values(data.data).every((item: any)  => item.length === 0)
          console.log('len:', searchText.length)
          if (data.status === 0) {
            if (!state) {
              emptyState.value = false
              searchData.data = data.data;
            } else {
              emptyState.value = true
            }
          }          
        } catch (error) {
          errorShow.value = true;
        }
      }

      res()
  } else {
    emptyState.value = false
  }
})
</script>
