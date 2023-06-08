<!-- 子组件 -->

<template>
  <div>
    <h2>navbar</h2>
    <button>{{ left }}</button>
    <span>{{ computedTitle }}</span>
    <button>{{ right }}</button>
  </div>
</template>

<script>
// 父传子是单向数据流，父传给子的属性，子不允许修改；如果子要修改，可以将属性赋值成自己状态，或者在计算属性中改
export default {
  // 第一种写法：接收父组件的props参数，视图层访问不用this，逻辑层访问需要this.xxx
  props: ['title', 'left', 'right'],
  computed: {
    computedTitle() {
      return this.title + '-加工后的title';
    },
  },
};
</script>
