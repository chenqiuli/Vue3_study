<template>
  <ul>
    <li v-for="item in datalist" :key="item" @click="handleClick">
      {{ item }}
    </li>
  </ul>
</template>

<script setup>
import { inject, ref } from 'vue';

const datalist = ref(['aaa', 'bbb', 'ccc']);
// 消费者
const which = inject('which');
const handleClick = () => {
  which.value = false;
};
</script>
