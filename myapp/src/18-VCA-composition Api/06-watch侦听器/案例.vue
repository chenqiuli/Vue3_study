<template>
  <div>
    <select name="" id="" v-model="select">
      <option value="太阳">太阳</option>
      <option value="月亮">月亮</option>
      <option value="地球">地球</option>
    </select>
    <input type="text" v-model="mytext" />
    <ul>
      <li v-for="item in computedList" :key="item.id">
        {{ item.content }}
      </li>
    </ul>
  </div>
</template>

<script>
import useList from './useList';
import useSearch from './useSearch';

export default {
  setup() {
    const { select, selectList } = useList();
    const { mytext, computedList } = useSearch(selectList);

    return {
      select,
      mytext,
      computedList,
    };
  },
};
</script>
