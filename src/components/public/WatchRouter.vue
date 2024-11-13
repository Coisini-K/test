<template>
    <div></div>
</template>

<script setup>
import { onMounted, onUnmounted, watch } from 'vue';
import { useRoute } from 'vue-router';
import useMainStore from '@/stores';
import useScrollStore from '@/stores/scroll';
import useDisplayStore from '@/stores/solid';
import { throttle } from 'lodash';

const route = useRoute();
const mainStore = useMainStore();
const scrollStore = useScrollStore();
const displayStore = useDisplayStore();

// 是否已添加滚动监听器
let hasAddedScrollListener = false;

// 使用 watch 监听路由变化
watch(route, async (newRoute) => {
    clearBar();
    initSticky();
    await initDisplay();
    scrollToTop();
    setDisplay(newRoute);
});

// 在组件挂载时也调用一次 scrollToTop，确保初始加载时页面也在顶部
onMounted(() => {
    initSticky();
    initDisplay().then(scrollToTop);
    removeScrollListener();
    addScrollListener();
    // console.log("加载");
});

// 在组件卸载时移除事件监听器
onUnmounted(() => {
    removeScrollListener();
    // console.log("卸载");
});

// 处理滚动事件
const handleScroll = () => {
    // console.log("监听滚动中...");
    const scrollTop = window.scrollY;
    const threshold = 320;
    if (scrollTop > threshold + 10 && !scrollStore.isSticky) {
        // console.log("滚动到阈值");
        scrollStore.setSticky(true);
    } else if (scrollTop < threshold - 10 && scrollStore.isSticky) {
        // console.log("滚动到顶部");
        scrollStore.setSticky(false);
    }
    // console.log(scrollStore.isSticky);
};

let scrollTimeout;

// 节流函数
const throttledHandleScroll = throttle(() => {
    if (scrollTimeout) {
        cancelAnimationFrame(scrollTimeout);
    }
    scrollTimeout = requestAnimationFrame(handleScroll);
}, 100);

// 添加滚动监听器
const addScrollListener = () => {
    if (!hasAddedScrollListener) {
        window.addEventListener('scroll', throttledHandleScroll);
        // console.log("加载监听");
        hasAddedScrollListener = true;
    }
};

// 移除滚动监听器
const removeScrollListener = () => {
    if (hasAddedScrollListener) {
        window.removeEventListener('scroll', throttledHandleScroll);
        // console.log("卸载监听");
        hasAddedScrollListener = false;
    }
};

// 初始化页面显示状态
const initDisplay = async () => {
    try {
        if (typeof displayStore.initDisplay === 'function') {
            await displayStore.initDisplay();
        } else {
            console.error(
                'initDisplay method is not a function:',
                displayStore
            );
        }
    } catch (error) {
        console.error('Failed to initialize display:', error);
    }
};

// 根据路由判断是否显示部分组件
const setDisplay = (route) => {
    const bool = route.path !== '/login';
    displayStore.setDisplay(bool);
};

// 初始化页面滚动高度权柄
const initSticky = () => {
    scrollStore.initSticky();
};

// 清除左侧电梯导航栏
const clearBar = () => {
    mainStore.clearBar();
};

// 将页面滚动到顶部
const scrollToTop = () => {
    try {
        window.scrollTo({
            top: 0,
            behavior: 'smooth', // 平滑滚动
        });
    } catch (error) {
        console.error('Failed to scroll to top:', error);
    }
};
</script>

<style scoped>
div {
    width: 0;
    height: 0;
    position: fixed;
    bottom: 0;
    left: 0;
}
</style>
