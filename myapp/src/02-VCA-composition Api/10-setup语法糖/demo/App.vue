<template>
  <div>
    <Navbar v-if="show" />
    <component :is="which ? List : Detail" />
  </div>
</template>

<script setup>
import List from './List.vue';
import Navbar from './Navbar.vue';
import Detail from './Detail.vue';
import { provide, ref } from 'vue';

const which = ref(true);
const show = ref(true);

// 生产者
provide('which', which);
provide('show', show);
</script>
