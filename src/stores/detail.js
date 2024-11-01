import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

const useCounterStore = defineStore('counter', () => {
  // 商品信息组
  const items = ref([]);
  // 设置函数
  const setItems = (arr) => {
    items.value = arr;
  };
  // 清除函数
  const clearItems = () => {
    items.value = [];
  };

  return { items, setItems, clearItems };
});
export default useCounterStore;
