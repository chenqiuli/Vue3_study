<template>
  <div class="navbarRoot">
    <!-- v-bind="$attrs" 让父组件的属性透传到该标签  -->
    <div
      v-bind="$attrs"
      class="aaa"
      style="font-size: 20px"
      @click="handleClick"
    >
      只有我才可以接收父组件透传下来的属性
    </div>
  </div>
</template>

<script>
export default {
  // 禁止父组件的属性透传
  inheritAttrs: false,
  methods: {
    handleClick() {
      console.log('navbar-click');
    },
  },
};
</script>

<style scoped>
.navbarRoot {
  height: 200px;
  background-color: #ccc;
}
</style>
