<script setup lang="ts">
/**
 * MainLayout
 */
import Header from '@/features/Header/ui/HeaderFeatures.vue';
</script>
<template>
  <header>
    <Header />
  </header>
  <main>
    <slot />
  </main>
  <footer>Footer</footer>
</template>
<style module lang="scss"></style>
