<script setup lang="ts">
import { reactive } from 'vue';
import { users } from '@/entities/Auth/model/auth';

const { sendAuth } = users();
const authRequest = reactive<{
  username: string;
  password: string;
}>({
  username: '',
  password: '',
});
</script>

<template>
  <div class="auth-form">
    <h4 class="auth-form__title">Авторизация</h4>
    <ElForm label-position="top" label-suffix="*" status-icon>
      <ElFormItem label="Логин" prop="username">
        <ElInput autocomplete="on" size="large" type="text" v-model="authRequest.username" clearable />
      </ElFormItem>
      <ElFormItem label="Пароль" prop="password">
        <ElInput
          autocomplete="off"
          size="large"
          type="password"
          v-model="authRequest.password"
          :show-password="true"
          clearable />
      </ElFormItem>
      <ElButton
        :disabled="!authRequest.username.length || !authRequest.password.length"
        style="width: 100%; border-radius: 2px"
        @click.prevent="
          sendAuth({
            username: authRequest.username,
            password: authRequest.password,
          })
        "
        size="large"
        :round="false"
        type="primary"
        typeof="submit"
        >Войти</ElButton
      >
    </ElForm>
  </div>
</template>

<style scoped lang="css">
.auth-form {
  width: 400px;
  height: auto;
  padding: 16px;
  border: 1px solid #f5f8fd;
  text-align: center;
}
</style>
