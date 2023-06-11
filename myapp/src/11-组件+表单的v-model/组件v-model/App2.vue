<template>
  <div>
    <h2>组件的v-model</h2>
    <Field v-model="username" />
    <h2>vue解析为</h2>
    <!-- <Field
      :modelValue="username"
      @update:modelValue="(newValue) => (username = newValue)"
    /> -->
    <h2>给组件的v-model更改别名</h2>
    <Field v-model:qiuli="username" />
  </div>
</template>

<script>
import Field from './Field2.vue';

export default {
  data() {
    return {
      username: 'sss',
    };
  },
  components: {
    Field,
  },
};
</script>
