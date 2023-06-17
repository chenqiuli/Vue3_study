import { GET_CINEMA_LIST } from '../mutation-types';
import axios from "axios";

const CinemaModule = {
  namespaced: true,// 命名空间
  state () {
    return {
      cinemaList: []
    };
  },
  // 同步
  mutations: {
    [GET_CINEMA_LIST] (state, { payload }) {
      state.cinemaList = payload;
    },
  },
  // 同步+异步
  actions: {
    async fetchCinemaList (state, { payload }) {
      // console.log(state, payload);
      const res = await axios({
        url: "https://m.maizuo.com/gateway?cityId=440300&ticketFlag=1&k=3873125",
        headers: {
          'X-Client-Info':
            '{"a":"3000","ch":"1002","v":"5.2.1","e":"16789325361560653676412929"}',
          'X-Host':
            'mall.film-ticket.cinema.list'
        }
      });
      // 异步请求完成之后触发一个commit同步改变state的数据
      state.commit({
        type: GET_CINEMA_LIST,
        payload: res.data.data.cinemas
      });
    }
  },
  // state的计算属性，当state内的状态需要处理又需要共享时   
  getters: {
    filterCinemaList (state) {
      return (type) => {
        return state.cinemaList.filter(
          (item) => item.eTicketFlag === type
        );
      };
    }
  }
};

export default CinemaModule;