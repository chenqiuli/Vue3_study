<template>
  <div>
    <ul>
      <li v-for="(item, index) in list" :key="index">
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: ['菜单管理', '用户管理', '权限管理', '权限管理'],
    };
  },
};
</script>

<style scoped>
li {
  padding: 20px;
}
</style>
