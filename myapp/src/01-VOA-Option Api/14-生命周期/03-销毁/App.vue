<template>
  <div>
    <button @click="isCreated = !isCreated">点击</button>
    <Child v-if="isCreated" :data="name" />
    <Chart v-if="isCreated" />
  </div>
</template>

<script>
import Chart from './Chart.vue';
import Child from './Child.vue';

export default {
  data() {
    return {
      name: '你好',
      isCreated: true,
    };
  },
  beforeUnmount() {
    console.log('beforeUnmount', this.name);
  },
  // 卸载生命周期：vue会帮我们把data内的数据自动清空，但是挂在window上的事件或变量不会，需要手动清空
  unmounted() {
    console.log('unmounted', this.name);
  },
  components: { Child, Chart },
};
</script>
