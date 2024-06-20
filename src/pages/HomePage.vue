<script setup lang="ts">
import MainLayout from '@/widgets/layouts/MainLayout.vue';
import { BaseButton } from '@/shared/ui/BaseButton/BaseButton';
</script>

<template>
  <MainLayout>
    <div :class="home.home">
      <div>
        <BaseButton>12</BaseButton>
      </div>
    </div>
  </MainLayout>
</template>
<style module="home" lang="scss">
.home {
  height: calc(100vh - 160px);
}
</style>
