<script setup lang="ts">
/**
 * MainLayout
 */
import Header from '@/features/Header/ui/HeaderFeatures.vue';
</script>
<template>
  <header :class="mainLayout.header">
    <Header />
  </header>
  <main :class="mainLayout.main">
    <slot />
  </main>
  <footer :class="mainLayout.footer">
    <div>Footer</div>
  </footer>
</template>
<style module="mainLayout" lang="scss">
.header,
.footer {
  background-color: rgb(255, 255, 255);
}
.header {
  box-shadow: 5px 5px 5px rgb(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
}
.footer {
  position: sticky;
  bottom: 0;
  display: flex;
  align-items: center;
  height: 64px;
  padding: 8px;
}
.main {
  height: 100%;
  overflow: auto;
}
</style>
