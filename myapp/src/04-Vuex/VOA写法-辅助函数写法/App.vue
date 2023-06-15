<template>
  <div>
    <!-- 插槽-路由容器 -->
    <router-view></router-view>
    <TabBar v-show="isTabbarShow" />
  </div>
</template>

<script>
import TabBar from './components/Tabbar.vue';
import { mapState } from 'vuex';
export default {
  components: {
    TabBar,
  },
  mounted() {
    console.log(this.$store.state.TabbarModule.isTabbarShow, 'appp ');
  },
  // computed: {
  //   isTabbarShow() {
  //     return this.$store.state.isTabbarShow;
  //   },
  // }, // 等同于 mapState(['isTabbarShow'])
  computed: {
    ...mapState('TabbarModule', ['isTabbarShow']),
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
