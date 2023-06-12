<template>
  <div class="swiper">
    <div class="swiper-wrapper">
      <div
        class="swiper-slide"
        v-for="(item, index) in list"
        :key="item"
        v-swiper="{
          index,
          length: list.length,
        }"
      >
        {{ item }}
      </div>
    </div>
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import axios from 'axios';

export default {
  data() {
    return {
      list: [],
    };
  },
  directives: {
    swiper: {
      mounted(el, binding) {
        const { index, length } = binding.value;
        if (index === length - 1) {
          console.log('最后一个节点才new');
          var swiper = new Swiper('.swiper', {
            loop: true,
            on: {
              slideChange: function () {
                console.log('slide changed', this.activeIndex);
              },
            },
            pagination: {
              el: '.swiper-pagination',
            },
          });
        }
      },
    },
  },
  mounted() {
    axios('/swiper.json').then((res) => {
      this.list = res.data;
    });
  },
};
</script>

<style scoped>
.swiper {
  width: 600px;
  height: 300px;
}
</style>
