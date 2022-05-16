<template>
  <div
    class="px-6 py-2 inline-block text-gray-500 bg-white"
    :class="[activeId == item.cityId ? 'activeTab' : '']"
    @click="cityData?.updateState(item.cityId)"
  >
    {{ item.cityName }}
  </div>
</template>


<script setup lang="ts">
import { inject, Ref } from 'vue'
import { injectCityId } from '@utils/key'

interface Props {
  item: ItemType;
  activeId: string;
}

interface ItemType {
  cityId: string;
  cityName: string;
  field: string;
}

const { item, activeId } = defineProps<Props>()

interface CityType {
  state: Ref<string>;
  updateState: (data: string) => void,
}

const cityData = inject<CityType>(injectCityId)

</script>

<style>
.activeTab {
  position: relative;
  color: #F4760D;
}

.activeTab::before {
  content: '';
  width: 80%;
  height: 2px;
  position: absolute;
  left: 50%;
  bottom: 2px;
  transform: translate(-50%, 0%);
  background-color: #F4760D;
}
</style>

