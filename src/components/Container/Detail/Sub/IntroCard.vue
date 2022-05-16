<template>
  <div class="mt-3">
    <div class="px-2 h-10 flex items-center border-b-1 border-gray-2">
      <font-awesome-icon :icon="iconName" class="basis-8 color-[#14b8a6]"/>
      <span class="color-[#14b8a6]">{{ title }}</span>
    </div>
    <div class="px-2 pt-3 pb-5 text-sm text-gray-500 text-left indent">
      {{ content }}
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  title: string;
  content: string;
  iconName: Array<string>;
}

defineProps<Props>()
</script>

