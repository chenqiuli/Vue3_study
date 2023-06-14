<template>
  <div>
    app
    <div id="box">aaaaass</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: 'aaa',
    };
  },
  computed: {
    computedName() {
      return this.name.toUpperCase();
    },
  },
  // 拿不到数据层
  beforeCreate() {
    console.log('beforeCreate', this.name, this.computedName);
  },
  // 拿得到数据层，初始化数据
  created() {
    console.log('created', this.name, this.computedName);
  },
  // 可以拿到数据层，拿不到DOM节点
  beforeMount() {
    console.log('beforeMount', this.name, this.computedName);
    console.log(document.getElementById('box'));
  },
  // 1.拿到DOM节点  2.ajax   3.订阅发布  4.全局事件绑定
  mounted() {
    console.log(document.getElementById('box'));
  },
};
</script>
