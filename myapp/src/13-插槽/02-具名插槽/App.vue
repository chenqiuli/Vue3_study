<template>
  <div>
    <Child>
      <!-- v-slot可简写为# -->
      <!-- v-slot只能用在template标签或子组件标签 -->
      <template v-slot:header> Header头部 </template>
      <template v-slot:main>Main主区域</template>
      <template #footer>Footer底部</template>
    </Child>
  </div>
</template>

<script>
import Child from './Child.vue';

export default {
  components: {
    Child,
  },
};
</script>
