<template>
  <div>
    {{ store.test }}
    <select name="" id="" v-model="type">
      <option :value="0">APP订票</option>
      <option :value="1">前台兑换</option>
    </select>
    <ul>
      <li v-for="item in store.filterCinemaList(type)" :key="item.cinemaId">
        {{ item.name }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useCinemaStore } from '../store/Setup Store写法/useCinemaStore';
const store = useCinemaStore();

const type = ref(1);
onMounted(() => {
  if (!store.cinemaList.length) {
    store.fetchCinemaList({
      payload: '参数传递',
    });
  } else {
    console.log('缓存');
  }
});
</script>

<style lang="less" scoped>
li {
  padding: 10px;
}
</style>
