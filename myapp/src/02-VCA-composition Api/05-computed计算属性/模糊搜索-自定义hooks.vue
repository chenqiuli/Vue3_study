<template>
  <div>
    <input type="text" v-model="mytext" />
    <ul>
      <li v-for="item in computedDatalist" :key="item">{{ item }}</li>
    </ul>
  </div>
</template>

<script>
import { ref } from 'vue';
import useSearch from './useSearch';

export default {
  setup() {
    const datalist = ref([]);

    setTimeout(() => {
      datalist.value = ['aaa', 'abb', 'aab', 'bcc', 'abc', 'bcd', 'add', 'acd'];
    }, 2000);

    return {
      ...useSearch(datalist),
    };
  },
};
</script>
