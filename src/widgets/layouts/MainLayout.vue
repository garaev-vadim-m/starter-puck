<script setup lang="ts">
/**
 * MainLayout
 */
import Header from '@/features/Header/ui/HeaderFeatures.vue';
</script>
<template>
  <header :class="[mainLayout.header, mainLayout['header-info']]">
    kek
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
  -webkit-box-shadow: 0 5px 5px -2px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 0 5px 5px -2px rgba(0, 0, 0, 0.1);
  box-shadow: 0 5px 5px -2px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  &-info {
    color: red;
  }
}
.footer {
  position: sticky;
  bottom: 0;
  display: flex;
  align-items: center;
  height: 64px;
  padding: 8px;
  -webkit-box-shadow: 0px -5px 5px -2px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 0px -5px 5px -2px rgba(0, 0, 0, 0.1);
  box-shadow: 0px -5px 5px -2px rgba(0, 0, 0, 0.1);
}
.main {
  height: 100%;
  overflow: auto;
}
</style>
