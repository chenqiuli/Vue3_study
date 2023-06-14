<template>
  <div>
    <button v-show="left" @click="handleLeft">返回</button>
    <span>{{ computedTitle }}</span>
    <button v-show="right">首页</button>
  </div>
</template>

<script>
import { computed } from 'vue';

export default {
  props: {
    left: Boolean,
    right: Boolean,
    title: String,
  },

  // setup的第一个参数是props参数
  setup(props, trigger) {
    const computedTitle = computed(() => props.title + '1111');

    const handleLeft = () => {
      trigger.emit('leftevent', '来自子组件的问候');
    };

    return {
      computedTitle,
      handleLeft,
    };
  },
};
</script>
