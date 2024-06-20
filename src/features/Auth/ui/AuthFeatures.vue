<script setup lang="ts">
import AuthForm from '@/entities/Auth/ui/AuthForm.vue';
</script>

<template>
  <div class="auth-features">
    <AuthForm />
  </div>
</template>

<style module lang="scss">
.auth-features {
  width: 100%;
  height: 100vh;
  display: grid;
  place-content: center;
}
</style>
