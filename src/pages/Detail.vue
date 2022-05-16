<template>
  <div class="w-screen h-auto min-h-screen bg-[#f4f4f4]">
    <DetailHeader nav-title="详情信息" />
    <SwiperPic :imgData="serverData.data.pics" />

    <View v-if="clientData.field === 'view'"
      :name="serverData.data.name"
      :starNum="Number(serverData.data.star)"
      :score="serverData.data.score"
      :price="Number(serverData.data.default_price)"
      :address="serverData.data.address"
      :openDateTime="serverData.data.open_datetime"
      :tip="serverData.data.tip"
      :intro="serverData.data.intro"
      :ticketInfo="serverData.data.ticket_info"
    />

    <Food v-if="clientData.field === 'food'"
      :name="serverData.data.name"
      :starNum="Number(serverData.data.star)"
      :score="serverData.data.score"
      :price="Number(serverData.data.default_price)"
      :address="serverData.data.address"
      :openDateTime="serverData.data.open_datetime"
      :recom="serverData.data.recom"
      :commentKeyword="serverData.data.comment_keyword"
    />

    <Hotel v-if="clientData.field === 'hotel'"
      :name="serverData.data.name"
      :starNum="Number(serverData.data.star)"
      :score="serverData.data.score"
      :price="Number(serverData.data.default_price)"
      :address="serverData.data.address"
      :service="serverData.data.service"
    />

    <Massage v-if="clientData.field === 'massage'"
      :name="serverData.data.name"
      :starNum="Number(serverData.data.star)"
      :score="serverData.data.score"
      :price="Number(serverData.data.default_price)"
      :address="serverData.data.address"
      :service="serverData.data.service"
      :openDateTime="serverData.data.open_datetime"
      :commentKeyword="serverData.data.comment_keyword"
    />

    <Ktv v-if="clientData.field === 'ktv'"
      :name="serverData.data.name"
      :starNum="Number(serverData.data.star)"
      :score="serverData.data.score"
      :price="Number(serverData.data.default_price)"
      :address="serverData.data.address"
      :service="serverData.data.service"
    />
  </div>
</template>

<script setup lang="ts">
import { onBeforeMount, reactive, defineAsyncComponent } from 'vue';
import DetailHeader from '@components/Header/Common.vue'
import detailModel from '@models/Detail';
import { useRoute } from 'vue-router'

const SwiperPic = defineAsyncComponent(() => import('@components/Container/Detail/Common/SwiperPic.vue'));
const View = defineAsyncComponent(() => import('@components/Container/Detail/View.vue'));
const Food = defineAsyncComponent(() => import('@components/Container/Detail/Food.vue'));
const Hotel = defineAsyncComponent(() => import('@components/Container/Detail/Hotel.vue'));
const Massage = defineAsyncComponent(() => import('@components/Container/Detail/Massage.vue'));
const Ktv = defineAsyncComponent(() => import('@components/Container/Detail/Ktv.vue'));

let serverData = reactive({
  data: {
    name: '',
    star: 0,
    score: '',
    address: '',
    default_price: 0,
    open_datetime: '',
    tip: '',
    intro: '',
    ticket_info: '',
    pics: [''],
    recom: '',
    comment_keyword: '',
    service: {
      parking: false,
      wifi: false,
    },
  }
})

let clientData = reactive({
  field: '',
  id: 0,
  errorShow: false,
})

onBeforeMount(() => {
  const { query } = useRoute();
  const { field, id } = query

  clientData.field = field as string
  clientData.id = Number(id as string)

  let res = async () => {
    const data = await detailModel.getDetail(field as string, id as string);

    if (data.status == 0) {
      data.data.pics = data.data.pics ? JSON.parse(data.data.pics) : []
      data.data.service = data.data.service ? JSON.parse(data.data.service) : {}
      serverData.data = data.data;
    }
  }

  res()
})

</script>
