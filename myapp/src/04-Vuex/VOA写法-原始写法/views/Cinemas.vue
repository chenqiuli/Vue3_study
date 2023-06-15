<template>
  <div>
    <select name="" id="" v-model="type">
      <option :value="0">APP订票</option>
      <option :value="1">前台兑换</option>
    </select>
    <ul>
      <li
        v-for="item in $store.getters.filterCinemaList(type)"
        :key="item.cinemaId"
      >
        {{ item.name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      type: 1,
    };
  },
  mounted() {
    if (!this.$store.state.cinemaList.length) {
      this.$store.dispatch({
        type: 'fetchCinemaList',
        payload: '参数传递测试',
      });
    } else {
      console.log('缓存');
    }
  },
  // computed: {
  //   filterCinemaList() {
  //     return this.$store.state.cinemaList.filter(
  //       (item) => item.eTicketFlag === this.type
  //     );
  //   },
  // },
};
</script>

<style lang="less" scoped>
li {
  padding: 10px;
}
</style>
