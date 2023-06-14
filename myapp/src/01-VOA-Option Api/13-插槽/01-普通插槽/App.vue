<template>
  <div>
    <Child> 我是Child组件的内容 </Child>
  </div>
</template>

<script>
import Child from './Child.vue';

export default {
  components: {
    Child,
  },
};
</script>
