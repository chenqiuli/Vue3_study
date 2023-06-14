<template>
  <div>
    {{ state.name }} - {{ state.age }} - {{ state.location }}
    <!-- <div>{{ name }} - {{ age }}</div> -->
    <button @click="handleClick">click</button>
  </div>
</template>

<script>
import { reactive, toRef } from 'vue';

export default {
  setup() {
    const name = toRef('niki');
    const age = toRef(18);

    const state = reactive({
      location: '广东',
      // 把ref转成reactive
      name,
      age,
    });

    const handleClick = () => {
      // 对reactive对象修改
      // state.name = 'niki-click';
      // state.age = 20;
      // 也可以对ref 修改
      name.value = 'niki-click';
      age.value = 20;
      state.location = '汕头';
    };

    return {
      // name,
      // age,
      state,
      handleClick,
    };
  },
};
</script>
