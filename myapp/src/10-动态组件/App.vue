<template>
  <div>
    <NavBar />
    <!-- KeepAlive：使组件有缓存 -->
    <!-- 动态组件：在多个组件间作切换时，被切换掉的组件会被卸载 -->
    <!-- <KeepAlive include="home,list">
      <component :is="which" />
    </KeepAlive> -->

    <!-- <KeepAlive :include="/home|list/">
      <component :is="which" />
    </KeepAlive> -->

    <KeepAlive :include="['home', 'list']">
      <component :is="which" />
    </KeepAlive>

    <!-- <KeepAlive :exclude="['home', 'list']">
      <component :is="which" />
    </KeepAlive> -->

    <!-- <KeepAlive :exclude="/home|list/">
      <component :is="which" />
    </KeepAlive> -->

    <!-- <KeepAlive exclude="home, list">
      <component :is="which" />
    </KeepAlive> -->
    <TabBar />
  </div>
</template>

<script>
import Center from './Center.vue';
import Home from './Home.vue';
import List from './List.vue';
import NavBar from './NavBar.vue';
import TabBar from './TabBar.vue';
import store from './store';
export default {
  data() {
    return {
      title: '首页',
      which: 'home',
    };
  },
  components: {
    NavBar,
    TabBar,
    Center,
    List,
    Home,
  },
  mounted() {
    const obj = {
      首页: 'home',
      列表页: 'list',
      我的: 'center',
    };
    store.subscribe((value) => {
      // console.log(value);
      this.which = obj[value];
    });
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
