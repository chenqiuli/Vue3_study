
import { computed, ref } from 'vue';
function useSearch (selectList) {
  const mytext = ref('');

  const computedList = computed(() =>
    selectList.value.filter((item) => item.content.includes(mytext.value))
  );

  return {
    mytext,
    computedList
  };
}

export default useSearch;