<template>
  <div>
    <van-nav-bar
      title="影院"
      :left-text="cityStore.cityName"
      @click-left="handleLeft"
    >
      <template #right>
        <van-icon name="search" size="20" />
      </template>
    </van-nav-bar>
    <div>
      {{ cinemaStore.test }}
      <select name="" id="" v-model="type">
        <option :value="0">APP订票</option>
        <option :value="1">前台兑换</option>
      </select>
    </div>

    <ul>
      <li
        v-for="item in cinemaStore.filterCinemaList(type)"
        :key="item.cinemaId"
      >
        {{ item.name }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useCinemaStore } from '../store/Setup Store写法/useCinemaStore';
import { useRouter } from 'vue-router';
import { useCityStore } from '../store/Setup Store写法/useCityStore';
const router = useRouter();
const cinemaStore = useCinemaStore();
const cityStore = useCityStore();

const type = ref(0); // 默认：APP订票
onMounted(() => {
  if (!cinemaStore.cinemaList.length) {
    cinemaStore.fetchCinemaList({
      payload: '参数传递',
    });
  } else {
    console.log('缓存');
  }
});

const handleLeft = () => {
  router.push('/city');
};
</script>

<style lang="less" scoped>
li {
  padding: 10px;
}
</style>
