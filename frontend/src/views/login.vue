<template>
  <form @submit.prevent="onSubmit">
    <div>
      <label for="username">账号:</label>
      <input type="text" id="username" v-model="credentials.username" required>
    </div>
    <div>
      <label for="password">密码:</label>
      <input type="password" id="password" v-model="credentials.password" required>
    </div>
    <button type="submit">登录</button>
  </form>
</template>

<script setup lang="ts">
import { reactive } from 'vue';

const credentials = reactive({
  username: '',
  password: ''
})

function onSubmit() {
  console.log(credentials)
}
</script>