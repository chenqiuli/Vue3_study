<template>
  <div class="flims">
    <div class="lunbo">轮播图</div>
    <ul class="list">
      <router-link
        :to="path"
        custom
        v-slot="{ isActive, navigate }"
        v-for="{ id, name, path } in list"
        :key="id"
      >
        <li @click="navigate">
          <span :class="isActive ? 'nikiActive2' : ''">
            {{ name }}
          </span>
        </li>
      </router-link>
    </ul>
    <router-view> </router-view>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const list = ref([
  {
    id: 1,
    name: '正在上映',
    path: '/films/nowplaying',
  },
  {
    id: 2,
    name: '即将上映',
    path: '/films/comingsoon',
  },
]);
</script>

<style lang="less" scoped>
.lunbo {
  height: 300px;
}
.list {
  display: flex;
  width: 100%;
  text-align: center;
  height: 50px;
  line-height: 50px;
  li {
    flex: 1;
    span {
      padding: 10px 0;
    }
  }
}
.nikiActive2 {
  color: red;
  border-bottom: 2px solid red;
}
</style>
