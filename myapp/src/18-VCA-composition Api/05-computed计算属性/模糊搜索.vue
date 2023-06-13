<template>
  <div>
    <input type="text" v-model="value" />
    <ul>
      <li v-for="item in computedDatalist" :key="item">{{ item }}</li>
    </ul>
  </div>
</template>

<script>
import { computed, ref } from 'vue';

export default {
  setup() {
    const value = ref('');
    const datalist = ref([
      'aaa',
      'abb',
      'aab',
      'bcc',
      'abc',
      'bcd',
      'add',
      'acd',
    ]);

    const computedDatalist = computed(() =>
      datalist.value.filter((item) => item.includes(value.value))
    );

    return {
      value,
      datalist,
      computedDatalist,
    };
  },
};
</script>
