<template>
  <div>
    <!-- 让异步请求回来的list数据返回了再new Swiper对象，Swiper才会正常工作 -->
    <Swiper
      v-if="list.length"
      :slides-per-view="3"
      :space-between="50"
      :loop="false"
      :pagination="true"
      @slideChange="onSlideChange"
    >
      <SwiperItem v-for="{ filmId, name, poster } in list" :key="filmId">
        <img :src="poster" :alt="name" style="width: 100%; height: 85%" />
      </SwiperItem>
    </Swiper>
  </div>
</template>

<script>
import Swiper from './Swiper.vue';
import SwiperItem from './SwiperItem.vue';
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
        'https://m.maizuo.com/gateway?cityId=440300&pageNum=1&pageSize=10&type=1&k=4093588',
      headers: {
        'X-Client-Info':
          '{"a":"3000","ch":"1002","v":"5.2.1","e":"16789325361560653676412929"}',
        'X-Host': 'mall.film-ticket.film.list',
      },
    }).then((res) => {
      this.list = res.data.data.films;
    });
  },
  components: {
    Swiper,
    SwiperItem,
  },
};
</script>
