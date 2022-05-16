<template>
  <div class="text-left">
    <template
      v-for="(item, idx) of tagList"
    >
      <span class="text-xs px-2 py-2 mr-2 bg-[#FEF5DE] color-[#F4760D]">{{ item }}</span>
    </template>
  </div>
</template>

<script setup lang="ts">
interface Props {
  tagList: Array<string>,
}

const { tagList } = defineProps<Props>()
</script>
