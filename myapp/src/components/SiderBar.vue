<template>
  <div>
    <ul>
      <li v-for="item in menuList" :key="item">
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuList: ['首页', '用户管理', '权限管理'],
    };
  },
};
</script>

<style scoped>
div {
  width: 200px;
}

ul li {
  padding: 20px;
  cursor: pointer;
}
</style>
