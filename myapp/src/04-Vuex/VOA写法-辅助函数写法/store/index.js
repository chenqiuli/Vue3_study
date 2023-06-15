import { createStore } from 'vuex';
import TabbarModule from "./module/TabbarModule";
import CinemaModule from "./module/CinemaModule";


const store = createStore({
  modules: {
    TabbarModule,
    CinemaModule
  }
});

export default store;