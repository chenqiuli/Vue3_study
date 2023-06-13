<template>
  <div>
    <div>{{ state.count }}</div>
    <button @click="handleClick">click</button>
  </div>
</template>

<script>
import { reactive } from 'vue';
// Mobx
export default {
  // setup：生命周期，页面初始化即响应
  setup() {
    // console.log('setup');
    // reactive是把对象变成响应式的, 底层是用Proxy拦截
    const state = reactive({
      count: 0,
    });

    const handleClick = () => {
      console.log('handleClick');
      // 函数内访状态不用this
      state.count++;
    };

    return {
      state,
      handleClick,
    };
  },
};
</script>
