<template>
  <div>
    child
    <button @click="handleClick">点击</button>
  </div>
</template>

<script>
export default {
  methods: {
    handleClick() {
      console.log(this.$parent.value); // 访问父组件的value
      console.log(this.$parent.$parent.value); // 访问爷爷组件的value
      console.log(this.$root.value); // 访问根组件的value
    },
  },
};
</script>
