<template>
  <div>
    <select name="" id="" v-model="type">
      <option :value="0">APP订票</option>
      <option :value="1">前台兑换</option>
    </select>
    <ul>
      <li
        v-for="item in store.getters[`CinemaModule/filterCinemaList`](type)"
        :key="item.cinemaId"
      >
        {{ item.name }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useStore } from 'vuex';
const store = useStore();

const type = ref(1);
onMounted(() => {
  if (!store.state.CinemaModule.cinemaList.length) {
    store.dispatch({
      type: 'CinemaModule/fetchCinemaList',
      payload: '参数传递测试',
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
