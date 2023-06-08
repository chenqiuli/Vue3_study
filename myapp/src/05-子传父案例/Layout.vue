<template>
  <div class="layoutRoot">
    <SiderBar class="siderBar" v-show="isShow" />
    <Content class="content" />
  </div>
</template>

<script>
import Content from './Content.vue';
import SiderBar from './SiderBar.vue';

export default {
  components: {
    SiderBar,
    Content,
  },
  props: {
    isShow: Boolean,
  },
};
</script>

<style scoped>
.layoutRoot {
  display: flex;
}
.siderBar {
  width: 200px;
}

.content {
  flex: 1;
}
</style>
