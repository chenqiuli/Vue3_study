<template>
  <div>
    <!-- 插槽-路由容器 -->
    <router-view></router-view>
    <TabBar v-show="$store.state.isTabbarShow" />
  </div>
</template>

<script>
import TabBar from './components/Tabbar.vue';
export default {
  components: {
    TabBar,
  },
  mounted() {
    console.log(this.$store.state.isTabbarShow);
  },
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
}
body,
html {
  overflow-x: hidden;
  overflow-y: auto;
}
li {
  list-style: none;
}
a {
  text-decoration: none;
  color: unset !important;
}
</style>
