<template>
  <!-- Slider main container -->
  <div class="swiper">
    <!-- Additional required wrapper -->
    <div class="swiper-wrapper">
      <!-- Slides -->
      <div class="swiper-slide" v-for="item in list" :key="item">
        {{ item }}
      </div>
    </div>
    <!-- If we need pagination -->
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';

// import styles bundle
import 'swiper/css/bundle';

import axios from 'axios';

export default {
  data() {
    return {
      list: [],
    };
  },
  mounted() {
    // setTimeout(() => {
    //   this.list = ['Slider1', 'Slider2', 'Slider3', 'Slider4'];
    //   this.$nextTick(() => {
    //     // init Swiper:
    //     var swiper = new Swiper('.swiper', {
    //       // Optional parameters
    //       direction: 'vertical',
    //       loop: true,
    //       on: {
    //         slideChange: function () {
    //           console.log('slide changed', this.activeIndex);
    //         },
    //       },

    //       // If we need pagination
    //       pagination: {
    //         el: '.swiper-pagination',
    //       },
    //     });
    //   });
    // }, 2000);
    axios('/swiper.json').then((res) => {
      this.list = res.data;
      this.$nextTick(() => {
        // init Swiper:
        var swiper = new Swiper('.swiper', {
          // Optional parameters
          // direction: 'vertical',
          loop: true,
          on: {
            slideChange: function () {
              console.log('slide changed', this.activeIndex);
            },
          },
          // If we need pagination
          pagination: {
            el: '.swiper-pagination',
          },
        });
      });
    });
  },
  updated() {
    // updated生命周期不管什么状态改变都会触发，会导致Swiper组件会new多次，Swiper只能new一次，要不分页器会不动，有bug
    // const swiper = new Swiper('.swiper', {
    //   // Optional parameters
    //   loop: true,
    //   on: {
    //     slideChange: function () {
    //       console.log('slide changed', this.activeIndex);
    //     },
    //   },
    //   // If we need pagination
    //   pagination: {
    //     el: '.swiper-pagination',
    //   },
    // });
  },
};
</script>

<style scoped>
.swiper {
  width: 600px;
  height: 300px;
}
</style>
