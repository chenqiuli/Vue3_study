<template>
  <div>
    <h2>Todolist</h2>
    <input type="text" v-model="mytext" />
    <button @click="handleAdd">add</button>

    <ul v-if="datalist.length">
      <li v-for="(item, index) in datalist" :key="item">
        {{ item }}
        <button @click="() => handleDel(index)">del</button>
      </li>
    </ul>

    <div v-else>空空如也</div>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const mytext = ref('');
    const datalist = ref(['111', '222', '333']);

    const handleAdd = () => {
      if (!datalist.value.includes(mytext.value)) {
        datalist.value.push(mytext.value);
      } else {
        alert('待办列表中已含有该事项');
      }
      mytext.value = '';
    };

    const handleDel = (index) => {
      datalist.value.splice(index, 1);
    };

    return {
      mytext,
      datalist,
      handleAdd,
      handleDel,
    };
  },
};
</script>
