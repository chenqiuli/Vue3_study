<template>
  <div>
    {{ name }}
    <button @click="handleClick">click</button>
    <Child v-if="isCreated" />
  </div>
</template>

<script>
import {
  nextTick,
  onBeforeMount,
  onBeforeUpdate,
  onMounted,
  onUpdated,
  ref,
} from 'vue';
import Child from './Child.vue';

export default {
  setup() {
    const name = ref('niki');
    const isCreated = ref(true);

    onBeforeMount(() => {
      console.log('onBeforeMount');
    });
    onMounted(() => {
      console.log('onMounted');
    });
    onBeforeUpdate(() => {
      console.log('onBeforeUpdate');
    });
    onUpdated(() => {
      console.log('onUpdated');
    });
    const handleClick = () => {
      name.value = 'niki-click';
      nextTick(() => {
        // 在updated后面执行，只在name这个状态改变时触发
        console.log('nextTick');
      });
    };
    return {
      name,
      isCreated,
      handleClick,
    };
  },
  components: { Child },
};
</script>
