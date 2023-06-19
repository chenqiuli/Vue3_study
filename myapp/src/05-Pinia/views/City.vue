<template>
  <van-index-bar :index-list="barlist.map((item) => item.index)">
    <div v-for="(item, index) in barlist" :key="index">
      <van-index-anchor :index="item.index" />
      <van-cell
        @click="(event) => handleClick(ele.cityId, event)"
        :title="ele.name"
        v-for="ele in item.cells"
        :key="ele.cityId"
      />
    </div>
  </van-index-bar>
</template>

<script setup>
import axios from 'axios';
import _ from 'lodash';
import { useTabbarStore } from '../store/Setup Store写法/useTabbarStore';
import { useCityStore } from '../store/Setup Store写法/useCityStore';
import { onBeforeMount, onBeforeUnmount, onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import { useCinemaStore } from '../store/Setup Store写法/useCinemaStore';
const tabbarStore = useTabbarStore();
const cityStore = useCityStore();
const cinemaStore = useCinemaStore();
const router = useRouter();

onBeforeMount(() => {
  tabbarStore.changeTabbarShow(false);
});
onBeforeUnmount(() => {
  tabbarStore.changeTabbarShow(true);
});

const barlist = ref([]);
onMounted(async () => {
  const res = await axios({
    url: 'https://m.maizuo.com/gateway?k=1993000',
    headers: {
      'X-Client-Info':
        '{"a":"3000","ch":"1002","v":"5.2.1","e":"16789325361560653676412929"}',
      'X-Host': 'mall.film-ticket.city.list',
    },
  });
  barlist.value = generateBigChar(res.data.data.cities);
});

function generateBigChar(data) {
  // 第一种方法 自己实现
  // const letters = []; // 大写字母26个
  // for (let i = 65; i < 91; i++) {
  //   letters.push(String.fromCharCode(i));
  // }
  // const cellList = []; // 把字母和城市整合到一起
  // letters.forEach((item) => {
  //   const someCity = []; // 相同拼音城市
  //   data.forEach((ele) => {
  //     if (ele.pinyin.slice(0, 1) === item.toLowerCase()) {
  //       someCity.push(ele);
  //     }
  //   });
  //   // console.log(item, someCity, '-=-');
  //   // 去除字母对应城市为空的数据
  //   someCity.length &&
  //     cellList.push({
  //       index: item,
  //       cells: someCity,
  //     });
  // });
  // return cellList;
  // 第二种方法 lodash
  data.sort(
    (item1, item2) =>
      item1.pinyin.slice(0, 1).toUpperCase().charCodeAt() -
      item2.pinyin.slice(0, 1).toUpperCase().charCodeAt()
  );
  const groupData = _.groupBy(data, (ele) =>
    ele.pinyin.slice(0, 1).toUpperCase()
  );
  const cellList = []; // 把字母和城市整合到一起
  for (let i in groupData) {
    cellList.push({
      index: i,
      cells: groupData[i],
    });
  }
  return cellList;
}

const handleClick = (id, event) => {
  // console.log(event.target.innerText, id);
  cityStore.changeCity({
    cityname: event.target.innerText,
    cityid: id,
  });
  cinemaStore.fetchCinemaList();
  router.go(-1);
};
</script>

<style lang="less" scoped>
:deep(.van-index-anchor) {
  background-color: #f4f4f4;
  color: #797d82;
  padding: 0 0 0 15px;
  height: 30px;
  line-height: 30px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
</style>
