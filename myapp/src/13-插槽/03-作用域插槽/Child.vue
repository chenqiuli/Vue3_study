<template>
  <!-- 把属性透露出去给父组件用 -->
  <slot :data="list" :a="1" :b="2" name="list">
    <ul>
      <li v-for="item in list" :key="item.filmId">{{ item.name }}</li>
    </ul>
  </slot>
  <slot name="other"></slot>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      list: [],
    };
  },
  mounted() {
    axios({
      url:
        'https://m.maizuo.com/gateway?cityId=440300&pageNum=1&pageSize=10&type=1&k=9756372',
      headers: {
        'X-Client-Info':
          '{"a":"3000","ch":"1002","v":"5.2.1","e":"16789325361560653676412929"}',
        'X-Host': 'mall.film-ticket.film.list',
      },
    }).then((res) => {
      // console.log(res.data.data.films);
      this.list = res.data.data.films;
    });
  },
};
</script>

<style scoped></style>
