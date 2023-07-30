<script setup lang="ts">
const route = useRoute()
const key = computed(() => route.path)
</script>

<template>
  <main class="main">
    <router-view v-slot="{ Component }">
      <component :is="Component" :key="key"/>
    </router-view>
  </main>
</template>
