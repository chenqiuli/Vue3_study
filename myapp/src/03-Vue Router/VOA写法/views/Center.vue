<template>
  <div>Center</div>
</template>

<script>
import { onBeforeRouteLeave } from 'vue-router';

export default {
  setup() {
    onBeforeRouteLeave((to, from) => {
      // 在组件离开前调用
      const answer = window.confirm('你确定离开我吗');
      if (!answer) return false;
    });
  },

  // beforeRouteEnter 在VCA中没有对应的钩子函数，所以还是得用VOA的方式去写
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
