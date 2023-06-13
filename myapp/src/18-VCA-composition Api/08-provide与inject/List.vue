<template>
  <ul>
    <li v-for="item in datalist" :key="item" @click="handleClick">
      {{ item }}
    </li>
  </ul>
</template>

<script>
import { inject, ref } from 'vue';

export default {
  setup() {
    const datalist = ref(['aaa', 'bbb', 'ccc']);
    // 消费者
    const which = inject('which');
    const handleClick = () => {
      which.value = 'Detail';
    };

    return {
      datalist,
      handleClick,
    };
  },
};
</script>
