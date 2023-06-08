<template>
  <div>
    <button>返回</button>
    <span>{{ app.title }}</span>
    <button @click="handleHome">首页</button>
  </div>
</template>

<script>
export default {
  // 子组件做消费者，接收父组件共享的属性
  inject: ['title', 'app'],
  methods: {
    handleHome() {
      console.log(this.title, this.app);
    },
  },
};
</script>

<style scoped>
div {
  display: flex;
  width: 100%;
  height: 50px;
  line-height: 50px;
  background-color: #fcfcfc;
}
button {
  width: 70px;
}
span {
  flex: 1;
  text-align: center;
}
</style>
