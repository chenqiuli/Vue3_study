<template>
  <div>
    <Parent />
  </div>
</template>

<script>
import Parent from './Parent.vue';

export default {
  data() {
    return {
      value: 'App-根',
    };
  },
  components: {
    Parent,
  },
};
</script>
