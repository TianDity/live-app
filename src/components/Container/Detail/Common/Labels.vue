<template>
  <div class="flex flex-wrap">
    <template
      v-for="(item, idx) of tagList"
    >
      <span class="px-2 py-1 mt-2 mr-2 border-1 rounded text-[#14b8a6] text-sm">{{ item }}</span>
    </template>
  </div>
</template>

<script setup lang="ts">
interface Props {
  tagList: Array<string>,
}

const { tagList } = defineProps<Props>()
</script>
