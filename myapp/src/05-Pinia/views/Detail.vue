<template>
  <div>
    <button @click="handleBack">返回</button>
    <h3>猜你喜欢</h3>
    <ul>
      <li @click="handleClick">仙剑奇侠传</li>
    </ul>
  </div>
</template>

<script setup>
import { onMounted, onBeforeMount, onBeforeUnmount } from 'vue';
import { onBeforeRouteUpdate, useRoute, useRouter } from 'vue-router';
import { useTabbarStore } from '../store/Opton Store写法/useTabbarStore';
const route = useRoute();
const router = useRouter();
const store = useTabbarStore();
onBeforeMount(() => {
  // 第一种：直接修改store的状态
  // store.isTabbarShow = false;
  // 第三种：用一个 state 的补丁对象在同一时间更改多个属性
  // store.$patch({
  //   isTabbarShow: false,
  // });
  // 第四种：触发action
  store.changeTabbarShow(false);
});
onBeforeUnmount(() => {
  // 第一种：直接修改store的状态
  // store.isTabbarShow = true;
  // 第二种：重置为store初始的状态，当store状态有多个不可全部重置，跟业务相关
  // store.$reset();
  // 第三种：用一个 state 的补丁对象在同一时间更改多个属性
  // store.$patch({
  //   isTabbarShow: true,
  // });
  // 第四种：触发action
  store.changeTabbarShow(true);
});
onMounted(() => {
  // 接收动态路由传递的id
  console.log('mounted ajax', route.params.id);
  // console.log('mounted', route.query.id);
});
const handleBack = () => {
  router.back();
  router.go(-1);
};

const handleClick = () => {
  router.push(`/detail/1000`);
};

onBeforeRouteUpdate((to, from) => {
  // 在当前路由改变，但是该组件被复用时调用
  console.log('mounted ajax', to.params.id);
});
</script>
