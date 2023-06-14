<template>
  <div>
    <Navbar v-if="show" />
    <component :is="which" />
  </div>
</template>

<script>
import List from './List.vue';
import Navbar from './Navbar.vue';
import Detail from './Detail.vue';
import { provide, ref } from 'vue';

export default {
  components: { Navbar, List, Detail },

  setup() {
    const which = ref('List');
    const show = ref(true);

    // 生产者
    provide('which', which);
    provide('show', show);

    return {
      which,
      show,
    };
  },
};
</script>
