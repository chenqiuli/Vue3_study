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
import { onMounted } from 'vue';
import { onBeforeRouteUpdate, useRoute, useRouter } from 'vue-router';
const route = useRoute();
const router = useRouter();
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
