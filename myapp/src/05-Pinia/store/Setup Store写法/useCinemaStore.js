import { defineStore } from 'pinia';
import axios from "axios";
import { computed, ref } from 'vue';


export const useCinemaStore = defineStore('cinema', () => {
  const cinemaList = ref([]);

  const fetchCinemaList = async (payload) => {
    console.log(payload);
    const res = await axios({
      url: "https://m.maizuo.com/gateway?cityId=440300&ticketFlag=1&k=3873125",
      headers: {
        'X-Client-Info':
          '{"a":"3000","ch":"1002","v":"5.2.1","e":"16789325361560653676412929"}',
        'X-Host':
          'mall.film-ticket.cinema.list'
      }
    });
    // 异步请求完成之后改变state的数据
    cinemaList.value = res.data.data.cinemas;
  };

  // computed替换getters
  const test = computed(() => "test");

  const filterCinemaList = computed(() => {
    return (type) => {
      return cinemaList.value.filter(item => item.eTicketFlag === type);
    };
  });

  return {
    cinemaList,
    fetchCinemaList,
    test,
    filterCinemaList
  };
});