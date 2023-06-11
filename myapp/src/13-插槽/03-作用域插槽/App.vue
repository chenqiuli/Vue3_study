<template>
  <div>
    <input type="text" v-model="inputValue" />
    <Child>
      <!-- 父组件访问子组件通过插槽透露出来的属性 -->
      <template #list="{ data }">
        <ul>
          <li v-for="{ filmId, name, poster } in data" :key="filmId">
            <img :src="poster" style="width: 100px; height: 100px" />
            <span
              style="color: red"
              v-if="name.includes(inputValue) && inputValue !== ''"
            >
              {{ name }}
            </span>
            <span v-else>{{ name }}</span>
          </li>
        </ul>
      </template>

      <template v-slot:other> 111 </template>
    </Child>
  </div>
</template>

<script>
import Child from './Child.vue';

export default {
  data() {
    return {
      inputValue: '',
    };
  },
  components: {
    Child,
  },
};
</script>

<style scoped>
ul li {
  list-style: none;
}
ul {
  display: flex;
  flex-wrap: wrap;
  margin: 20px 0;
}
li {
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
}
li span {
  width: 100px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: center;
}
</style>
