import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useNewsStore = defineStore('news', () => {
  const newsList = ref([]);

  const addNews = (value) => {
    newsList.value = [
      ...newsList.value,
      value
    ];
  };

  return {
    newsList,
    addNews,
  };
}); 