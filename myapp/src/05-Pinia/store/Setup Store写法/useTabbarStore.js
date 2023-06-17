import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useTabbarStore = defineStore('tabbar', () => {
  const isTabbarShow = ref(true);

  const changeTabbarShow = (value) => {
    isTabbarShow.value = value;
  };

  return {
    isTabbarShow,
    changeTabbarShow
  };
}); 