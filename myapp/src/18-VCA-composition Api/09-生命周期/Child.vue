<template>
  <div>child</div>
</template>

<script>
import { onBeforeUnmount, onMounted, onUnmounted } from 'vue';

export default {
  setup() {
    var timeId;
    onMounted(() => {
      timeId = setInterval(() => {
        console.log('111');
      }, 1000);
    });

    onBeforeUnmount(() => {
      console.log('onBeforeUnmount');
    });

    onUnmounted(() => {
      console.log('onUnmounted');
      clearInterval(timeId);
    });
  },
};
</script>
