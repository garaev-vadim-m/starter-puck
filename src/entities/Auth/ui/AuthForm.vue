<script setup lang="ts"></script>

<template>
  <div :class="authForm['authForm']">AuthForm</div>
  <div :class="authForm['authForm-info']">AuthForm</div>
</template>

<style module="authForm" lang="scss">
.authForm {
  color: red;
  &-info {
    color: blue;
  }
}
</style>
