<template>
  <div>
    <h2>Todolist</h2>
    <input type="text" v-model="state.mytext" />
    <button @click="handleAdd">add</button>
    <ul v-if="state.datalist.length">
      <li v-for="(item, index) in state.datalist" :key="item">
        {{ item }}
        <button @click="() => handleDel(index)">del</button>
      </li>
    </ul>
    <div v-else>空空如也</div>
  </div>
</template>

<script>
import { reactive } from 'vue';

export default {
  setup() {
    const state = reactive({
      mytext: '',
      datalist: ['111', '222', '333'],
    });

    const handleAdd = () => {
      if (!state.datalist.includes(state.mytext)) {
        state.datalist = [...state.datalist, state.mytext];
      } else {
        alert('待办列表中已含有该事项');
      }
      state.mytext = '';
    };

    const handleDel = (index) => {
      state.datalist.splice(index, 1);
    };

    return { state, handleAdd, handleDel };
  },
};
</script>
