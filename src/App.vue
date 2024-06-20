<script setup lang="ts">
/**
 * App Component
 */
</script>

<template>
  <RouterView v-slot="{ Component }">
    <component :is="Component" />
  </RouterView>
</template>
