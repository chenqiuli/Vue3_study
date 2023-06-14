<template>
  {{ inputValue }}
  <button v-show="left">返回</button>
  <input type="text" v-model="inputValue" />
  <button v-show="right">首页</button>
</template>

<script>
export default {
  data() {
    return {
      inputValue: this.title,
    };
  },
  // 第二种写法：
  props: {
    title: String,
    left: {
      type: Boolean,
      required: true,
    },
    right: {
      type: Boolean,
      // 默认值，不传也可
      default: true,
    },
    dataList: {
      type: String,
      // 自定义类型校验函数
      validator(value) {
        return ['success', 'danger', 'error', 'info'].includes(value);
      },
    },
  },
};
</script>
