<template>
  <div>child-{{ data }}</div>
</template>

<script>
export default {
  props: ['data'],
  beforeUnmount() {
    console.log('child beforeUnmount', this.data);
  },
  unmounted() {
    console.log('child unmounted', this.data);
  },
};
</script>
