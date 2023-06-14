<template>
  <div>
    <NavBar
      :title="title"
      :left="true"
      :right="true"
      @leftevent="handleEvent"
    />
    <NavBar title="影院" :left="true" :right="true" />
  </div>
</template>

<script>
import { ref } from 'vue';
import NavBar from './Navbar.vue';

export default {
  components: {
    NavBar,
  },

  setup() {
    const title = ref('首頁');
    const handleEvent = (value) => {
      console.log('handleEvent', value);
    };

    return {
      title,
      handleEvent,
    };
  },
};
</script>
