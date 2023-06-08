<template lang="">
  <!-- 不可修改父组件的data --> <!-- <li @click="handleClick1">
  {{ data }}
  </li> --> <li @click="handleClick2">
  {{ data }}
  </li>
</template>

<script>
export default {
  props: ['data'],
  // 子组件做消费者，接收父组件共享的属性
  inject: ['title', 'app'],

  methods: {
    handleClick1() {
      // title不是响应式的Proxy对象，修改不了父组件的data
      console.log('handleClick', this.data, this.title);
      this.title = this.data;
    },
    handleClick2() {
      // this.app 是响应式的，可以修改父组件的data
      console.log(this.title, this.app);
      this.app.title = this.data;
    },
  },
};
</script>
