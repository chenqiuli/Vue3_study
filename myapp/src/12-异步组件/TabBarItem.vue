<template>
  <li @click="handleClick">
    {{ data }}
  </li>
</template>

<script>
import store from './store';

export default {
  props: ['data'],

  methods: {
    handleClick() {
      store.publish(this.data);
    },
  },
};
</script>
