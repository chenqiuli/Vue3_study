<template>
  <ul>
    <TabBarItem v-for="(item, index) in list" :key="item" :data="item" />
  </ul>
</template>

<script>
import TabBarItem from './TabBarItem.vue';

export default {
  data() {
    return {
      list: ['首页', '列表页', '我的'],
    };
  },
  components: {
    TabBarItem,
  },
};
</script>

<style scoped>
ul {
  display: flex;
  justify-content: space-between;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 50px;
  line-height: 50px;
}
li {
  flex: 1;
  text-align: center;
  cursor: pointer;
}
</style>
