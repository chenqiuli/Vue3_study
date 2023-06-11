<template>
  <div>
    <div id="name">{{ name }}</div>
    <button @click="handleClick">点击</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '你好',
    };
  },
  methods: {
    handleClick() {
      this.name = '大家好';
      this.$nextTick();
    },
  },
  mounted() {
    this.name = '我好';
  },
  // 每次更新状态都会调用更新生命周期，不论什么状态改变都会更新，如果想要某个特定的状态更改后再更新，用$nextTick();
  beforeUpdate() {
    console.log('beforeUpdate', this.name, document.getElementById('name'));
  },
  updated() {
    console.log('updated', this.name, document.getElementById('name'));
  },
};
</script>
