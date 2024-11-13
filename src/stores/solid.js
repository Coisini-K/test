// 页面显示状态

import { ref } from 'vue';
import { defineStore } from 'pinia';

const useDisplayStore = defineStore('displayStore', () => {
    const isDisplay = ref(false);
    // 设置函数
    const setDisplay = (bool) => {
        isDisplay.value = bool;
    };
    // 清除函数
    const initDisplay = () => {
        isDisplay.value = false;
    };

    return {
        isDisplay,
        setDisplay,
        initDisplay,
    };
});

export default useDisplayStore;
