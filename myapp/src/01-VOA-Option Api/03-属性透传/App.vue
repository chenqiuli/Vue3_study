<template>
  <div>
    <!-- 任何属性都会透传到NavBar子组件的根节点上，NavBar子组件最外层必须用div包裹住，属性透传下去后，会与子组件上同名的属性合并 -->
    <NavBar class="navbar" style="background: pink" @click="handleClick" />
  </div>
</template>

<script>
import NavBar from './Navbar.vue';

export default {
  components: {
    NavBar,
  },
  methods: {
    handleClick() {
      console.log('app-handleClick');
    },
  },
};
</script>

<style scoped>
.navbar {
  /* background-color: pink; */
  height: 40px;
  width: 100%;
}
</style>
