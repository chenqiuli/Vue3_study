<template>
  <div>
    <!-- 插槽-路由容器 -->
    <router-view></router-view>
    <TabBar v-show="store.isTabbarShow" />
  </div>
</template>

<script setup>
import TabBar from './components/Tabbar.vue';
import { useTabbarStore } from './store/Setup Store写法/useTabbarStore';
const store = useTabbarStore();
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
