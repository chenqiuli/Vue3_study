<template>
  <div class="appRoot">
    <NavBar class="navBar" @aaa="handleAAA" />
    <Layout class="layout" :isShow="isShow" />
  </div>
</template>

<script>
import Layout from './Layout.vue';
import NavBar from './NavBar.vue';

export default {
  data() {
    return {
      isShow: true,
    };
  },
  methods: {
    handleAAA() {
      console.log('handleAAA');
      this.isShow = !this.isShow;
    },
  },
  components: {
    NavBar,
    Layout,
  },
};
</script>

<style scoped>
.appRoot {
  height: 100vh;
  display: flex;
  flex-direction: column;
}
.navBar {
  height: 50px;
  background-color: #fcfcfc;
}
.layout {
  flex: 1;
}
</style>
