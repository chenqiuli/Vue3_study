<template>
  <div>
    {{ childTilte }}
    {{ title }}
    <!-- <button @click="handleClick">点击</button> -->
    <button @click="$emit('event', childTilte)">点击</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      childTilte: 'Child标题',
    };
  },
  props: ['title'],
  methods: {
    handleClick() {
      // 子组件上触发父组件的事件实现通信
      this.$emit('event', this.childTilte);
    },
  },
};
</script>
