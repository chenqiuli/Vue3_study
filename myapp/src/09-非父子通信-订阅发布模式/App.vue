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
