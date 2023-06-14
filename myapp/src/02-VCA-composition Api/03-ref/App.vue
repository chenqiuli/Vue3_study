<template>
  <div>
    {{ count }}
    <button @click="handleClick">click</button>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    // ref不仅可以绑定dom节点，可以绑定组件，还可以包装元素，让它变成响应式的，底层还是用的Proxy拦截，但是Proxy只能包装对象，所以直接用ref包裹元素，Proxy会把它变成 new Proxy({ value: 0 })，在视图层使用直接使用变量名，在函数中要用变量名.value
    const count = ref(0);
    const handleClick = () => {
      console.log(count);
      count.value++;
    };
    return {
      count,
      handleClick,
    };
  },
};
</script>
