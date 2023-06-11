<template>
  <div>
    <h2>v-model语法糖-{{ username }}</h2>
    <input type="text" v-model="username" />
    <h2>v-model原理实现-{{ password }}</h2>
    <!-- <input
      type="text"
      :value="password"
      @input="password = $event.target.value"
    /> -->
    <input type="text" :value="password" @input="handleInput" />
    <br />
    {{ isChecked }}
    <!-- <input type="checkbox" v-model="isChecked" /> -->
    <input
      type="checkbox"
      :value="isChecked"
      @change="isChecked = !isChecked"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: 'aaa',
      password: '',
      isChecked: true,
    };
  },
  methods: {
    handleInput(evt) {
      console.log(evt.target.value);
      this.password = evt.target.value;
    },
  },
};
</script>
