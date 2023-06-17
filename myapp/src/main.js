import { createApp } from 'vue';
import { createPinia } from 'pinia';
import './style.css';
import App from './05-Pinia/App.vue';
import router from "./05-Pinia/router";

createApp(App).use(router).use(createPinia()).mount('#app');
