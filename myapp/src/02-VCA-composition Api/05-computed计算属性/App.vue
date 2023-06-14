<template>
  <div>
    {{ state.name }}
    {{ computedName }}
  </div>
</template>

<script>
import { computed, reactive } from 'vue';

export default {
  setup() {
    const state = reactive({
      name: 'niki',
    });

    const computedName = computed(
      () => state.name.slice(0, 1).toUpperCase() + state.name.slice(1)
    );

    return {
      state,
      computedName,
    };
  },
};
</script>
