<template>
  <div class="w-screen min-h-screen bg-[#f4f4f4]">
    <SearchInput v-model="inputText"
      @update:model-value="updateInputText"
    />
    <SearchContainer
      v-if="inputText && inputText.length > 0"
      :list-data="searchData.data"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, watch } from 'vue';
import searchModel from '@models/search';
import SearchInput from '@components/SearchInput/Index.vue'
import SearchContainer from '@components/Container/Search/Index.vue'
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

const updateInputText = useThrottleFn((data: string) => {
  searchState.value = !searchState.value
}, 1000)

watch(searchState, (newValue, oldValue) => {
  const searchText = inputText.value.trim()
  if (inputText.value.length > 0 && newValue !== oldValue) {
    let res = async () => {
      let data = await searchModel.searchAction(searchText, cityStore.cityId);

      if (data.status === 0) {
        searchData.data = data.data;
      }
    }

    res()
  }
})
</script>
