<template>
  <div>
    <button>返回</button>
    <span>{{ title }}</span>
    <button>首页</button>
  </div>
</template>

<script>
import store from './store';
export default {
  data() {
    return {
      title: '首页',
    };
  },
  methods: {},
  mounted() {
    store.subscribe((value) => {
      console.log('订阅到了', value);
      this.title = value;
    });
  },
};
</script>

<style scoped>
div {
  display: flex;
  width: 100%;
  height: 50px;
  line-height: 50px;
  background-color: #fcfcfc;
}
button {
  width: 70px;
}
span {
  flex: 1;
  text-align: center;
}
</style>
