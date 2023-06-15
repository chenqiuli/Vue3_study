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

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    handleLogin() {
      localStorage.setItem('token', 'aaa');
      this.$router.push('/center');
    },
  },
};
</script>
