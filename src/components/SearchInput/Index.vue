<template>
  <div class="flex justify-between h-14 px-2 py-2 bg-[#ffd100] sticky top-0 z-50 items-center">
    <div class="basis-1/12 py-2" @click="handleBack">
      <BackWard /> 
    </div>
    <div class="basis-11/12 h-full">
      <input
        type="text"
        class="w-full h-full rounded-sm px-2 outline-0 b-0"
        :placeholder="searchText"
        :value="modelValue"
        ref="inputRef"
        @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"      
      >
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'SearchInput',
}
</script>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import BackWard from '@components/Header/Sub/BackWard.vue'
import { useRouter } from 'vue-router'

interface Props {
  modelValue: string
}

defineProps<Props>()

defineEmits(['update:modelValue'])
const searchText = ref('美食/景点/酒店/按摩/KTV');
const inputRef = ref<HTMLInputElement | null>(null);

onMounted(() => {
  inputRef.value && inputRef.value.focus();
})

const { back } = useRouter()

const handleBack = () => {
  back()
}
</script>
