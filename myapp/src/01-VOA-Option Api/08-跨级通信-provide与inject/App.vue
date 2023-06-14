<template>
  <div>
    <NavBar />
    <TabBar />
  </div>
</template>

<script>
import NavBar from './NavBar.vue';
import TabBar from './TabBar.vue';
export default {
  data() {
    return {
      title: '首页',
    };
  },
  components: {
    NavBar,
    TabBar,
  },
  // 父组件做生产者
  provide() {
    return {
      title: this.title,
      // 把app这一整个组件实例传下去，响应式的Proxy对象才能修改app的属性,
      app: this,
    };
  },
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
}
ul li {
  list-style: none;
}
</style>
