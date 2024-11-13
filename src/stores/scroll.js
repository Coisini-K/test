// 页面滚动吸顶状态

import { ref } from 'vue';
import { defineStore } from 'pinia';

const useScrollStore = defineStore('scroll', () => {
    const isSticky = ref(false);
    // 设置函数
    const setSticky = (bool) => {
        isSticky.value = bool;
    };
    // 清除函数
    const initSticky = () => {
        isSticky.value = false;
    };

    return { isSticky, setSticky, initSticky };
});
export default useScrollStore;
