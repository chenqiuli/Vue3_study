import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useCityStore = defineStore('city', () => {
  const cityName = ref("广州");
  const cityId = ref(440100);

  const changeCity = ({ cityname, cityid }) => {
    cityName.value = cityname;
    cityId.value = cityid;
  };

  return {
    cityName,
    cityId,
    changeCity,
  };
}); 