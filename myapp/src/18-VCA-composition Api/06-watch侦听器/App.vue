<template>
  <div>
    aaa
    <input type="text" v-model="mytext" />
    <select v-model="select">
      <option value="111">111</option>
      <option value="222">222</option>
      <option value="333">333</option>
    </select>
  </div>
</template>

<script>
import { ref, watch } from 'vue';

export default {
  setup() {
    const mytext = ref('');
    const select = ref(111);

    // 写法一
    watch(
      mytext,
      (newvalue, oldvalue) => {
        console.log('ajax', newvalue, oldvalue);
      },
      // 一上来就触发
      { immediate: true }
    );
    // 写法二
    // watch(
    //   () => mytext.value,
    //   (newvalue, oldvalue) => {
    //     console.log(newvalue, oldvalue);
    //   }
    // );
    // 写法三：多个侦听
    // watch([mytext, select], (newvalue, oldvalue) => {
    //   console.log(newvalue, oldvalue);
    // });

    return {
      mytext,
      select,
    };
  },
};
</script>
