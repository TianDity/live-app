<template>
  <div class="pb-10">
    <ViewCard v-if="field == 'view'" show="grid" :data="listData" />
    <FoodCard v-if="field == 'food'" show="flex" :data="listData" />
    <HotelCard v-if="field == 'hotel'" show="flex" :data="listData" />
    <MassageCard v-if="field == 'massage'" show="flex" :data="listData" />
    <KtvCard v-if="field == 'ktv'" show="flex" :data="listData" />
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue';
import { useRoute } from 'vue-router';
const ViewCard = defineAsyncComponent(() => import('@components/Container/Common/Card/View/Index.vue'));
const FoodCard = defineAsyncComponent(() => import('@components/Container/Common/Card/Food/Index.vue'));
const HotelCard = defineAsyncComponent(() => import('@components/Container/Common/Card/Hotel/Index.vue'));
const MassageCard = defineAsyncComponent(() => import('@components/Container/Common/Card/Massage/Index.vue'));
const KtvCard = defineAsyncComponent(() => import('@components/Container/Common/Card/Ktv/Index.vue'));

interface Props {
  listData: any;
}

defineProps<Props>()

const { query } = useRoute()
const { field } = query
</script>
