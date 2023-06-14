<!-- 父组件 -->

<template>
  <!-- 1.单个单个透传，动态属性动态绑定 -->
  <NavBar :title="title1" left="返回" right="首页" />
  <!-- 2.在一个对象上传 -->
  <NavBar
    v-bind="{
      title: '我的电影2',
      left: '返回',
      right: '首页',
    }"
  />
  <!-- 3.对象放在data内，动态绑定传 -->
  <NavBar v-bind="navBarObj" />
</template>

<script>
import NavBar from './NavBar.vue';
export default {
  data() {
    return {
      title1: '我的电影1',
      navBarObj: {
        title: '我的电影3',
        left: '返回',
        right: '首页',
      },
    };
  },
  components: {
    NavBar,
  },
};
</script>
