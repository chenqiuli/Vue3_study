<template>
  <div>
    <!-- 让异步请求回来的list数据返回了再new Swiper对象，Swiper才会正常工作 -->
    <Swiper
      v-if="list.length"
      :slides-per-view="3"
      :space-between="50"
      :loop="false"
      :pagination="false"
      @slideChange="onSlideChange"
    >
      <SwiperItem v-for="item in list" :key="item">{{ item }}</SwiperItem>
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
    axios('swiper.json').then((res) => {
      this.list = res.data;
    });
  },
  components: {
    Swiper,
    SwiperItem,
  },
};
</script>
