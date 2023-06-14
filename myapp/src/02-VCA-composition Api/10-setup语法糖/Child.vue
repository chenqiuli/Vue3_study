<template>
  <div>
    <button @click="handleClick">返回</button>
    {{ title }}
    <button>首页</button>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';
const props = defineProps({
  title: {
    type: String,
    default: '首页',
  },
});

const emit = defineEmits(['leftevent']);

const handleClick = () => {
  console.log(props.title);
  emit('leftevent', '来自子组件的问候');
};
</script>
