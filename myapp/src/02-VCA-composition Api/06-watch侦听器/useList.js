import { ref, watch, watchEffect } from 'vue';
import axios from 'axios';

function useList () {
  const select = ref('太阳');
  const selectList = ref([]);


  /**
   * watch：第一次页面展示不会立刻执行，等数据变化再执行
            参数可以拿到当前值和原始值
            可以侦听多个数据的变化
   */
  // watch(
  //   select,
  //   async (newvalue) => {
  //     const res = await axios(
  //       `http://localhost:3000/list?author=${newvalue}`
  //     );
  //     selectList.value = res.data;
  //   },
  //   { immediate: true }
  // );

  /**
   * watchEffect：第一次页面展示立刻执行
   *              不需要监听，代码中有数据变化就执行
   *              不需要传递很多参数，只要传递一个回调函数
   *              不能获取当前值和原始值
   * 
   */
  watchEffect(async () => {
    const res = await axios(
      `http://localhost:3000/list?author=${select.value}`
    );
    selectList.value = res.data;
  });

  return {
    select,
    selectList
  };
}

export default useList;