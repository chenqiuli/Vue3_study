<template>
  <div>detail</div>
</template>

<script setup>
import { inject, onMounted } from 'vue';
const show = inject('show');

onMounted(() => {
  show.value = false;
});
</script>
