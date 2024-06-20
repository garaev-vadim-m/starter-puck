<script setup lang="ts">
import HeaderNavbar from '@/entities/Header/ui/HeaderNavbar.vue';
</script>
<template>
  <div :class="header.header">
    <HeaderNavbar />
  </div>
</template>

<style module="header" lang="scss">
.header {
  height: 72px;
  position: sticky;
  top: 0;
}
</style>
