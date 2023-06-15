<template>
  <div>
    <button @click="handleBack">返回</button>
    <h3>猜你喜欢</h3>
    <ul>
      <li @click="handleClick">仙剑奇侠传</li>
    </ul>
  </div>
</template>

<script>
export default {
  mounted() {
    // 接收动态路由传递的id
    console.log('mounted ajax', this.$route.params.id);
    // console.log('mounted', this.$route.query.id);
  },
  methods: {
    handleBack() {
      this.$router.back();
      // this.$router.go(-1);
    },
    handleClick() {
      this.$router.push(`/detail/1000`);
    },
  },
  // watch: {
  //   '$route.params': function () {
  //     console.log('mounted ajax', this.$route.params.id);
  //   },
  // },
  beforeRouteUpdate(to, from) {
    // console.log(to);
    // 在当前路由改变，但是该组件被复用时调用
    console.log('mounted ajax', to.params.id);
  },
};
</script>
