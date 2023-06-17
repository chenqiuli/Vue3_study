<template>
  <div>
    <!-- 插槽-路由容器 -->
    <router-view></router-view>
    <TabBar v-show="store.state.TabbarModule.isTabbarShow" />
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import TabBar from './components/Tabbar.vue';
import { useStore } from 'vuex';
const store = useStore();
onMounted(() => {
  console.log(store.state.TabbarModule.isTabbarShow);
});
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
