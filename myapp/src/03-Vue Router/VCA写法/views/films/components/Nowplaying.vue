<template>
  <div>
    <ul>
      <li
        v-for="item in list"
        :item="item.filmId"
        @click="handleClick(item.filmId)"
      >
        {{ item.name }}
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      list: [],
    };
  },
  async mounted() {
    const res = await axios({
      url:
        'https://m.maizuo.com/gateway?cityId=440300&pageNum=1&pageSize=10&type=1&k=1487779',
      headers: {
        'X-Client-Info':
          '{"a":"3000","ch":"1002","v":"5.2.1","e":"16789325361560653676412929"}',
        'X-Host': 'mall.film-ticket.film.list',
      },
    });
    this.list = res.data.data.films;
  },
  methods: {
    handleClick(filmId) {
      // location.href = `/#/detail/${filmId}`;
      // 1.params传参方式：两种写法  /detail/:id
      this.$router.push(`/detail/${filmId}`);
      // this.$router.push({
      //   name: 'detailpage', // detail路由页面的命名路由
      //   params: {
      //     id: filmId, // id是动态路由占位符
      //   },
      // });
      // 2.query传参方式：/detail?id=1000   /detail
      // this.$router.push({
      //   path: '/detail', // detail路由页面的命名路由
      //   query: {
      //     id: filmId, // id是动态路由占位符
      //   },
      // });
    },
  },
};
</script>

<style lang="less" scoped>
ul {
  li {
    padding: 10px;
  }
}
</style>
