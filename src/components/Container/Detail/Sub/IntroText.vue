<template>
  <div class="flex px-2 py-2 items-center text-sm">
    <span class="basis-1/12">
      <font-awesome-icon :icon="iconName" class="color-[#aeaeae]"/>
    </span>
    <span class="basis-11/12 text-gray-700 text-left">{{ title }}</span>
  </div>
</template>

<script setup lang="ts">

interface Props {
  title: string;
  iconName: Array<string>;
}

defineProps<Props>()

</script>
