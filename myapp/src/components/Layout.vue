<template>
  <div>
    <SiderBar v-if="isShowSiderbar"></SiderBar>
    <!-- <Content> </Content> -->

    <div>{{ mytitle }}</div>
  </div>
</template>

<script>
import SiderBar from './SiderBar.vue';
import Content from './Content.vue';
export default {
  components: {
    SiderBar,
    Content,
  },
  // 接收父组件的props参数
  props: ['isShowSiderbar', 'mytitle'],
};
</script>
