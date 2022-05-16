<template>
  <div class="flex justify-between h-12 px-2 py-2 bg-[#ffd100] sticky top-0 z-50 items-center">
    <div @click="handleBack">
      <BackWard />
    </div>
    <div class="text-gray-800">
      {{ navTitle }}
    </div>
    <div class="pl-3 pr-2"></div>
  </div>
</template> 

<script setup lang="ts">
import BackWard from './Sub/BackWard.vue'
import { useRouter } from 'vue-router'

interface Props {
  navTitle: string
}

const { back } = useRouter()

const handleBack = () => {
  back()
}

defineProps<Props>()

</script>
