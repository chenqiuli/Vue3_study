<template>
  <div>
    <select name="" id="" v-model="type">
      <option :value="0">APP订票</option>
      <option :value="1">前台兑换</option>
    </select>
    <ul>
      <li v-for="item in filterCinemaList(type)" :key="item.cinemaId">
        {{ item.name }}
      </li>
    </ul>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex';

export default {
  data() {
    return {
      type: 1,
    };
  },
  mounted() {
    if (!this.cinemaList.length) {
      this.fetchCinemaList({
        payload: '参数传递测试',
      });
    } else {
      console.log('缓存');
    }
  },
  methods: {
    ...mapActions('CinemaModule', ['fetchCinemaList']),
  },
  computed: {
    ...mapState('CinemaModule', ['cinemaList']),
    ...mapGetters('CinemaModule', ['filterCinemaList']),
    //   filterCinemaList() {
    //     return this.$store.state.cinemaList.filter(
    //       (item) => item.eTicketFlag === this.type
    //     );
    //   },
  },
};
</script>

<style lang="less" scoped>
li {
  padding: 10px;
}
</style>
