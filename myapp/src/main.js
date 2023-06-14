import { createApp } from 'vue';
import './style.css';
import App from './03-Vue Router/App.vue';
import router from "./03-Vue Router/router";


createApp(App).use(router).mount('#app');
