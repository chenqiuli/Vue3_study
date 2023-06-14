import { createApp } from 'vue';
import './style.css';
import App from './03-Vue Router/VCA写法/App.vue';
import router from "./03-Vue Router/VCA写法/router";


createApp(App).use(router).mount('#app');
