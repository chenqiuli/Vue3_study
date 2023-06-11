<template>
  <div>
    {{ label }}-{{ modelValue }}
    <!-- <input :type="type" :value="modelValue" @input="handleInput"> </div> -->
    <input :type="type" :value="qiuli" @input="handleInput" />
  </div>
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
    // qiuli: {
    //   type: String,
    //   default: '',
    // },
    modelValue: {
      type: String,
      default: '',
    },
  },
  methods: {
    handleInput(evt) {
      // this.$emit('update:modelValue', evt.target.value);
      this.$emit('update:qiuli', evt.target.value);
    },
  },
};
</script>
