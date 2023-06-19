<template>
  <div>
    Center
    <van-button type="primary">主要要按钮</van-button>
  </div>
</template>

<script>
import { onBeforeRouteLeave } from 'vue-router';
// import { Button } from 'vant';
// console.log(Button.name); // van-button
export default {
  // components: {
  //   [Button.name]: Button,
  // },

  setup() {
    onBeforeRouteLeave((to, from) => {
      // 在组件离开前调用
      const answer = window.confirm('你确定离开我吗');
      if (!answer) return false;
    });
  },

  // beforeRouteEnter  在VCA中没有对应的钩子函数，所以还是得用VOA的方式去写
  // 在进入该路由时执行
  async beforeRouteEnter(to, from, next) {
    const isAuthenticated = await localStorage.getItem('token');
    if (isAuthenticated) {
      next();
    } else {
      next({ path: '/login' });
    }
  },
};
</script>
