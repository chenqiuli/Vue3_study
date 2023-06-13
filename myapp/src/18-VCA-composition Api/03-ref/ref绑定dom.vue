<template>
  <div>
    <input type="text" ref="input" v-model="value" />
    <button @click="handleClick">click</button>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const value = ref('aaa');
    const input = ref(null);

    const handleClick = () => {
      console.log(input.value); // 获取原生dom节点
      console.log(input.value.value); // 获取input标签value值
      input.value.style = 'border: 1px solid red;';
    };

    return {
      value,
      input,
      handleClick,
    };
  },
};
</script>
