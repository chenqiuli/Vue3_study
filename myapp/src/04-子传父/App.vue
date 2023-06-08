<template>
  <div>
    <!-- 父组件上定义一个事件 -->
    <Child title="标题" @event="handleEvent" />
  </div>
</template>

<script>
import Child from './Child.vue';

export default {
  components: {
    Child,
  },
  methods: {
    handleEvent(value) {
      console.log('触发了父组件的方法', value);
    },
  },
};
</script>
