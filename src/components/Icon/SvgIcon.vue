<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  prefix?: string
  name: string
  color?: string
  size?: string
  width?: string
  height?: string
}

const props = withDefaults(defineProps<Props>(), {
  prefix: 'icon',
  color: 'black',
})
const symbolId = computed(() => `#${props.prefix}-${props.name}`)
</script>

<template>
  <svg
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    :height="props.size ?? props.height"
    :width="props.size ?? props.width"
    :style="`color: ${props.color}`"
  >
    <use :href="symbolId" />
  </svg>
</template>

<style lang="scss" scoped>
svg {
  fill: currentcolor;
  stroke: currentcolor;
}
</style>
