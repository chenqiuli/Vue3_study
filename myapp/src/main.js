import { createApp } from 'vue';
import './style.css';
import App from './04-Vuex/VCA写法/App.vue';
import router from "./04-Vuex/VCA写法/router";
import store from "./04-Vuex/VCA写法/store";


createApp(App).use(router).use(store).mount('#app');
