<template>
  <App />
</template>

<script>
import App from './14-生命周期/03-销毁/App.vue';

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
