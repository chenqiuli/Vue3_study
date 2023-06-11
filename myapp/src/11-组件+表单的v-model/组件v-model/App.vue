<template>
  <div>
    <Field :value="username" @event="handleEvent" />
  </div>
</template>

<script>
import Field from './Field.vue';

export default {
  data() {
    return {
      username: '11',
    };
  },
  methods: {
    handleEvent(value) {
      console.log(value);
      this.username = value;
    },
  },
  components: {
    Field,
  },
};
</script>
