<template>
  <div>detail</div>
</template>

<script>
import { inject, onMounted } from 'vue';

export default {
  setup() {
    const show = inject('show');

    onMounted(() => {
      show.value = false;
    });
  },
};
</script>
