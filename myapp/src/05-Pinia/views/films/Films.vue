<template>
  <div class="flims">
    <van-swipe class="my-swipe" :autoplay="1000" indicator-color="red">
      <van-swipe-item>1</van-swipe-item>
      <van-swipe-item>2</van-swipe-item>
      <van-swipe-item>3</van-swipe-item>
      <van-swipe-item>4</van-swipe-item>
    </van-swipe>
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
// vite.config.js中按需引入了vant组件，使用的时候不需要手动引入
// import { Swipe as vanSwipe, SwipeItem as vanSwipeItem } from 'vant';

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
.list {
  display: flex;
  width: 100%;
  text-align: center;
  height: 50px;
  line-height: 50px;
  position: sticky;
  top: 0;
  z-index: 999;
  background-color: white;
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

.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
}
</style>
