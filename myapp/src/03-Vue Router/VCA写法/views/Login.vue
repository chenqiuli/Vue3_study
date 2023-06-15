<template>
  <div>
    <div>
      用户名
      <input type="text" v-model="username" />
    </div>
    <div>
      密码
      <input type="password" v-model="password" />
    </div>
    <button @click="handleLogin">Login</button>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const username = ref('');
const password = ref('');

const handleLogin = () => {
  localStorage.setItem('token', 'aaa');
  router.push('/center');
};
</script>
