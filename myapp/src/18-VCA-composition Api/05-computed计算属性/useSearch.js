// 自定义hooks：复用逻辑
import { ref, computed } from "vue";


function useSearch (datalist) {
  const mytext = ref("");
  const computedDatalist = computed(() =>
    datalist.value.filter((item) => item.includes(mytext.value))
  );

  return {
    computedDatalist,
    mytext
  };
}

export default useSearch;