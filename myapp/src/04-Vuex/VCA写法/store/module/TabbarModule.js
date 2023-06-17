import { TRIGGER_TABBAR, } from '../mutation-types';

const TabbarModule = {
  namespaced: true,// 命名空间
  state () {
    return {
      isTabbarShow: true,
    };
  },
  // 同步
  mutations: {
    [TRIGGER_TABBAR] (state, { payload }) {
      console.log(payload, 'payload');
      state.isTabbarShow = payload;
    },
  },
};

export default TabbarModule;