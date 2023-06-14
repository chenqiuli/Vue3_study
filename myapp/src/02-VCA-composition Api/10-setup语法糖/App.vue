<template>
  <div>
    <div>{{ name }}</div>
    <div>{{ computedName }}</div>
    <div>
      <button @click="handleClick">click</button>
    </div>
    <div>{{ state.locaiton }}-{{ state.age }}</div>
    <div>{{ locaiton }}-{{ age }}</div>
    <div>
      <input type="text" v-model="mytext" />
    </div>
    <ul>
      <li v-for="item in list" :key="item">{{ item }}</li>
    </ul>
    <Child title="列表页" @leftevent="handleLeft" />

    <div v-niki="'red'">我是自定义指令</div>
    <div v-niki="'yellow'">我是自定义指令</div>
    <div v-niki="color">我是自定义指令</div>
  </div>
</template>

<script setup>
import axios from 'axios';
import { computed, reactive, ref, toRefs, watch, watchEffect } from 'vue';
import Child from './Child.vue';

const color = ref('blue');
const name = ref('niki');

const state = reactive({
  locaiton: '广东',
  age: 18,
});
const { locaiton, age } = { ...toRefs(state) };

const computedName = computed(
  () => name.value.substring(0, 1).toUpperCase() + name.value.substring(1)
);

const handleClick = () => {
  name.value = 'tom';
};

const mytext = ref('');
const list = ref([]);
// watchEffect(async () => {
//   console.log('ajax');
//   const res = await axios('/swiper.json');
//   list.value = res.data;
// });
watch(
  mytext,
  async () => {
    // console.log('ajax');
    const res = await axios('/swiper.json');
    list.value = res.data;
  },
  { immediate: true }
);

const handleLeft = (value) => {
  console.log('handleLeft', value);
};

const vNiki = (el, binding) => {
  console.log(binding);
  el.style.color = binding.value;
};
</script>
