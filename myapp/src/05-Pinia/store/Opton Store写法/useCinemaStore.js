import { defineStore } from 'pinia';
import axios from "axios";


export const useCinemaStore = defineStore('cinema', {
  // 其他配置...
  state: () => ({
    cinemaList: []
  }),
  // 同步+异步
  actions: {
    async fetchCinemaList ({ payload }) {
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
      this.cinemaList = res.data.data.cinemas;
    }
  },
  // 计算属性，计算state的属性
  getters: {
    test () {
      return "test";
    },
    filterCinemaList (state) {
      return (type) => {
        return state.cinemaList.filter(item => item.eTicketFlag === type);
      };
    }
  }
});