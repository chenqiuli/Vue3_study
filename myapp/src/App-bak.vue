<template>
  <div class="root">
    <NavBar class="navbar" @click="handleClick"></NavBar>
    <!-- 父传子，把isShowSiderbar动态传给子组件Layout -->
    <Layout
      class="layout"
      mytitle="标题"
      :isShowSiderbar="isShowSiderbar"
    ></Layout>
  </div>
</template>

<script>
import NavBar from './components/Navbar.vue';
import Layout from './components/Layout.vue';
export default {
  data() {
    return {
      isShowSiderbar: true,
    };
  },
  methods: {
    handleClick() {
      this.isShowSiderbar = !this.isShowSiderbar;
    },
  },
  components: {
    NavBar,
    Layout,
  },
};
</script>

<style>
.root {
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: #fcfcfc;
}
.navbar {
  height: 80px;
  border-bottom: 1px solid #ddd;
}
.layout {
  flex: 1;
  display: flex;
}
</style>
