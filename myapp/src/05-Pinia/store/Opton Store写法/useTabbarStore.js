import { defineStore } from 'pinia';

export const useTabbarStore = defineStore('tabbar', {
  // 其他配置...
  state: () => ({
    isTabbarShow: true
  }),
  actions: {
    changeTabbarShow (value) {
      this.isTabbarShow = value;
    }
  }


});