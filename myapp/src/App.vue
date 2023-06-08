<template>
  <App />
</template>

<script>
import App from './10-动态组件/App.vue';

export default {
  data() {
    return {
      value: 'app-根',
    };
  },

  components: {
    App,
  },
};
</script>
