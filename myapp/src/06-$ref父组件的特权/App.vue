<template>
  <div>
    <!-- ref绑定在dom节点上，获取dom节点 -->
    <input type="text" ref="username" v-model="username" />
    <button @click="handleClick">点击</button>
  </div>
  <div>
    <!-- ref绑定在组件上，获取子组件的实例，实现组件通信 -->
    <Input label="用户名" type="text" ref="myusername" />
    <Input label="密码" type="password" ref="mypassword" />
    <Input label="年龄" type="number" ref="myage" />
    <div>
      <button @click="handleRegister">注册</button>
      <button @click="handleReset">重置</button>
    </div>
  </div>
</template>

<script>
import Input from './Input.vue';

export default {
  data() {
    return {
      username: '你好',
    };
  },
  methods: {
    handleClick() {
      console.log(this.$refs.username.value); // 获取input节点的值
      this.$refs.username.style = 'border: 1px solid red';
    },
    handleRegister() {
      console.log(
        this.$refs.myusername.value,
        this.$refs.mypassword.value,
        this.$refs.myage.value
      );
    },
    handleReset() {
      this.$refs.myusername.value = '';
      this.$refs.mypassword.value = '';
      this.$refs.myage.value = '';
    },
  },
  components: {
    Input,
  },
};
</script>
