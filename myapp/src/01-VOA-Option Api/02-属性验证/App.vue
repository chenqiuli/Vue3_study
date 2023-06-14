<template lang="">
  <div> <Child title="标题" :left="true" dataList="success" /> </div>
</template>

<script>
import Child from './Child.vue';
export default {
  components: {
    Child,
  },
};
</script>
