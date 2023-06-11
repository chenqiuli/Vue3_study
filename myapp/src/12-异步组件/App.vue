<template>
  <div>
    <NavBar />
    <KeepAlive :include="['home', 'list']">
      <component :is="which" />
    </KeepAlive>
    <TabBar />
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue';
// import Center from './Center.vue';
// import Home from './Home.vue';
// import List from './List.vue';
import NavBar from './NavBar.vue';
import TabBar from './TabBar.vue';
import store from './store';

import LoadingComponent from './components/LoadingComponent.vue';
import ErrorComponent from './components/ErrorComponent.vue';
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
    // 异步加载：优化首屏加载速度，按需加载
    Center: defineAsyncComponent(() => import('./Center.vue')),
    List: defineAsyncComponent({
      // 加载函数
      loader: () => import('./List.vue'),

      // 加载异步组件时使用的组件
      loadingComponent: LoadingComponent,
      // 展示加载组件前的延迟时间，默认为 200ms
      delay: 200,

      // 加载失败后展示的组件
      errorComponent: ErrorComponent,
      // 如果提供了一个 timeout 时间限制，并超时了
      // 也会显示这里配置的报错组件，默认值是：Infinity
      timeout: 1000,
    }),
    Home: defineAsyncComponent(() => import('./Home.vue')),
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
