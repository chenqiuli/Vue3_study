<template lang="">
  <div>
  {{ label }}-{{ value }}
  <input :type="type" :value="value" @input="handleInput"> </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: '用户名',
    },
    type: {
      type: String,
      default: 'text',
    },
    value: {
      type: String,
      default: '',
    },
  },
  methods: {
    handleInput(evt) {
      this.$emit('event', evt.target.value);
    },
  },
};
</script>
