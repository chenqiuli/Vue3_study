<template>
  <div class="nowplaying">
    <van-list
      v-model:loading="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
      :immediate-check="false"
      offset="15"
    >
      <van-cell
        v-for="item in list"
        :key="item.filmId"
        @click="handleClick(item.filmId)"
      >
        <img
          :src="item.poster"
          :alt="item.name"
          style="width: 100px; height: 100px"
        />
        <span>{{ item.name }}</span>
      </van-cell>
    </van-list>
  </div>
</template>

<script setup>
import axios from 'axios';
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter();
const list = ref([]);
const loading = ref(false);
const finished = ref(false);
const pageNum = ref(1);
const total = ref(0);

const onLoad = async () => {
  console.log('onLoad 初始化', total.value, list.value.length);
  if (total.value === list.value.length) {
    // 取完所有数据后把finished设置成true，不让频繁发请求
    finished.value = true;
    return;
  }
  pageNum.value++;
  const res = await axios({
    url: `https://m.maizuo.com/gateway?cityId=440300&pageNum=${pageNum.value}&pageSize=10&type=1&k=1487779`,
    headers: {
      'X-Client-Info':
        '{"a":"3000","ch":"1002","v":"5.2.1","e":"16789325361560653676412929"}',
      'X-Host': 'mall.film-ticket.film.list',
    },
  });
  list.value = [...list.value, ...res.data.data.films]; // 请求完数据之后，load事件会自动讲loading设置为true
  loading.value = false; // 必须把loading设置成false，才能再次下拉
};

onMounted(async () => {
  const res = await axios({
    url:
      'https://m.maizuo.com/gateway?cityId=440300&pageNum=1&pageSize=10&type=1&k=1487779',
    headers: {
      'X-Client-Info':
        '{"a":"3000","ch":"1002","v":"5.2.1","e":"16789325361560653676412929"}',
      'X-Host': 'mall.film-ticket.film.list',
    },
  });
  list.value = res.data.data.films;
  total.value = res.data.data.total;
});

const handleClick = (filmId) => {
  // location.href = `/#/detail/${filmId}`;
  // 1.params传参方式：两种写法  /detail/:id
  router.push(`/detail/${filmId}`);
  // router.push({
  //   name: 'detailpage', // detail路由页面的命名路由
  //   params: {
  //     id: filmId, // id是动态路由占位符
  //   },
  // });
  // 2.query传参方式：/detail?id=1000   /detail
  // router.push({
  //   path: '/detail', // detail路由页面的命名路由
  //   query: {
  //     id: filmId, // id是动态路由占位符
  //   },
  // });
};
</script>

<style lang="less" scoped>
ul {
  li {
    padding: 10px;
  }
}
.nowplaying {
  height: 100vh;
}
// 修改vant样式
:deep(.van-cell__value) {
  text-align: left;
}
</style>
