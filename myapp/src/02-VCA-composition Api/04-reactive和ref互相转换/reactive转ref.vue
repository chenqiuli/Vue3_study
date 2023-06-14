<template>
  <div>
    {{ name }}-{{ age }}
    <button @click="handleClick">click</button>
  </div>
</template>

<script>
import { reactive, toRef, toRefs } from 'vue';

export default {
  setup() {
    const state = reactive({
      name: 'niki',
      age: 18,
    });

    // console.log(toRef(state, 'name'));
    // console.log(toRefs(state));

    const handleClick = () => {
      state.name = 'niki-click';
      state.age = 20;
    };

    return {
      // state,
      handleClick,
      // 对state对象内的属性单个转换
      // name: toRef(state, 'name'),
      // age: toRef(state, 'age'),
      // 对state对象内的属性统一转换
      ...toRefs(state),
    };
  },
};
</script>
