<template>
  <div>
    <div v-niki>111</div>
    <div v-niki="'blue'">222</div>
    <div v-niki="'green'">333</div>
    <div v-niki="whichColor">333</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      whichColor: 'gray',
    };
  },
  // 局部自定义指令
  directives: {
    // niki: {
    //   // 只会在初始化执行一次，如果指令的值是状态，状态修改完后没有再次触发
    //   mounted(el, binding) {
    //     console.log(el, binding);
    //     el.style.background = binding.value ?? 'red';
    //   },
    //   // 所以状态更新，重新触发一次
    //   updated(el, binding) {
    //     console.log(el, binding);
    //     el.style.background = binding.value ?? 'red';
    //   },
    // },

    // 官方提供了函数写法简写mounted和updated生命周期
    niki(el, binding) {
      console.log(el, binding);
      el.style.background = binding.value ?? 'red';
    },
  },
};
</script>
