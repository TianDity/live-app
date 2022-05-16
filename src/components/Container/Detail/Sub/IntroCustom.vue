<template>
  <div class="flex px-2 py-2 items-center">
    <span class="basis-8">
      <font-awesome-icon :icon="iconName" class="color-[#aeaeae]"/>
    </span>
    <span class="text-gray-700 flex items-center">
      <slot></slot>
    </span>
  </div>
</template>

<script setup lang="ts">
interface Props {
  iconName: Array<string>;
}

defineProps<Props>()
</script>
