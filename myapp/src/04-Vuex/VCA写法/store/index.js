import { createStore } from 'vuex';
import TabbarModule from "./module/TabbarModule";
import CinemaModule from "./module/CinemaModule";
// vuex持久化
import createPersistedState from "vuex-persistedstate";


const store = createStore({
  // vuex持久化
  plugins: [createPersistedState({
    reducer: (state) => {
      return {
        isTabbarShow: state.TabbarModule.isTabbarShow,
        cinemaList: state.CinemaModule.cinemaList
      };
    }
  })],
  modules: {
    TabbarModule,
    CinemaModule
  }
});

export default store;