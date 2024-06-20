<script setup lang="ts">
/**
 * AuthLayout
 */
</script>
<template>
  <main :class="authLayout.authLayout">
    <slot />
  </main>
</template>
<style module="authLayout" lang="scss">
.authLayout {
  background-color: #000;
  height: 100vh;
}
</style>
