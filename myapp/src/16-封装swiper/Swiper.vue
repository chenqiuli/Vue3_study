<template>
  <div class="swiper">
    <div class="swiper-wrapper">
      <slot></slot>
    </div>
    <div class="swiper-pagination" v-if="pagination"></div>
  </div>
</template>

<script>
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

export default {
  data() {
    return {
      list: [],
    };
  },
  props: {
    slidesPerView: {
      type: Number,
      default: 1,
    },
    spaceBetween: {
      type: Number,
      default: 0,
    },
    loop: {
      type: Boolean,
      default: true,
    },
    pagination: {
      type: Boolean,
      default: true,
    },
  },
  mounted() {
    var swiper = new Swiper('.swiper', {
      loop: this.loop,
      slidesPerView: this.slidesPerView,
      spaceBetween: this.spaceBetween,
      on: {
        slideChange: function () {
          console.log('slide changed', this.activeIndex);
        },
      },
      pagination: {
        el: '.swiper-pagination',
      },
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
