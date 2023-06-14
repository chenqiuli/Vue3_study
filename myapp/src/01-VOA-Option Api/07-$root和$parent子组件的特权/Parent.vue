<template>
  <div>
    <Child />
  </div>
</template>

<script>
import Child from './Child.vue';

export default {
  data() {
    return {
      value: 'Parent-父',
    };
  },
  components: {
    Child,
  },
};
</script>
