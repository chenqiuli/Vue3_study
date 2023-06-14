<template>
  <div>Center</div>
</template>

<script>
export default {
  // 组件渲染前调用，通常做组件内的拦截
  async beforeRouteEnter(to, from, next) {
    const isAuthenticated = await localStorage.getItem('token');
    if (isAuthenticated) {
      next();
    } else {
      next({ path: '/login' });
    }
  },

  beforeRouteLeave(to, from) {
    // 在组件离开前调用
    const answer = window.confirm('你确定离开我吗');
    if (!answer) return false;
  },
};
</script>
