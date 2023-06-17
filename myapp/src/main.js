import { createApp } from 'vue';
import { createPinia } from 'pinia';
import './style.css';
import App from './05-Pinia/App.vue';
import router from "./05-Pinia/router";
// 全局引入Vant组件样式
// import 'vant/lib/index.css'; 
import "./05-Pinia/utils/config";

createApp(App).use(router).use(createPinia()).mount('#app');
