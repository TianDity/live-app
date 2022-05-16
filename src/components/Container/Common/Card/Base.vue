<template>
  <div class="mt-4 bg-white">
    <template v-if="cardTitle && cardTitle.length > 0">
      <div class="h-12 px-2 leading-12 text-left text-gray-800 font-semibold border-b-1 border-gray-200">
        {{ cardTitle }}
      </div>
    </template>
    <div :class="[show == 'grid' ? 'grid-layout' : 'flex-layout']">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'BaseCard',
}
</script>


<script lang="ts" setup>

interface Props {
  cardTitle?: string;
  show: string;
}

const { cardTitle, show } = defineProps<Props>()

</script>
