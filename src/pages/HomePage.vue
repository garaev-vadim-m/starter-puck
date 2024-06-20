<script setup lang="ts">
import MainLayout from '@/widgets/layouts/MainLayout.vue';
</script>

<template>
  <MainLayout>
    <div :class="home.home">
      <div>HomePage</div>
    </div>
  </MainLayout>
</template>
<style module="home" lang="scss">
.home {
  height: calc(100vh - 160px);
}
</style>
