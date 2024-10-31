<template>
  <div class="sidebar" v-if="isSticky">
    <!-- <div class="sidebar-header"></div> -->
    <nav class="sidebar-nav">
      <ul>
        <li v-for="(item, index) in items" :key="index" @click="navigate(item)">
          <a :class="{ active: item.isActive }">{{ item.name }}</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script setup>
import { computed, onMounted, onUnmounted, watchEffect, ref } from 'vue';
import useMainStore from '@/stores';
const mainStore = useMainStore();

// 创建一个计算属性，依赖于 mainStore.bar
const items = computed(() => {
  const barItems = mainStore.bar;
  // console.log('Computed bar value:', barItems);
  return barItems;
});

// 存储目标元素的位置
const targetPositions = ref([]);
// 根据滚动高度决定是否显示组件
const isSticky = ref(false);

// 是否已添加滚动监听器
let hasAddedScrollListener = false;

// 使用 vue 的 watchEffect 来监听 items 的变化
watchEffect(() => {
  // console.log('Watched items value:', items.value);
  updateTargetPositions();
  removeScrollListener();
  addScrollListener();
});

// 在组件挂载完成后初始化目标元素的位置
onMounted(() => {
  updateTargetPositions();
  addScrollListener();
});

// 在组件卸载时移除滚动监听器
onUnmounted(removeScrollListener);

// 更新目标元素的位置
function updateTargetPositions() {
  targetPositions.value = items.value.map((item) => {
    const element = document.querySelector(item.target);
    return element ? element.offsetTop : null;
  });
}

// 添加滚动监听器
function addScrollListener() {
  if (!hasAddedScrollListener) {
    window.addEventListener('scroll', handleScroll);
    hasAddedScrollListener = true;
  }
}

// 移除滚动监听器
function removeScrollListener() {
  if (hasAddedScrollListener) {
    window.removeEventListener('scroll', handleScroll);
    hasAddedScrollListener = false;
  }
}

// 处理滚动事件
function handleScroll() {
  const scrollTop = window.scrollY;
  let activeIndex = 0;
  if (scrollTop > 120) {
    isSticky.value = true;
  } else {
    isSticky.value = false;
  }

  for (let i = 0; i < targetPositions.value.length; i++) {
    if (scrollTop > targetPositions.value[i] - 100) {
      activeIndex = i;
    } else {
      break;
    }
  }

  // 更新激活状态
  items.value.forEach((item, index) => {
    item.isActive = index === activeIndex;
  });
}

// 导航到指定位置
function navigate(item) {
  // 更新所有项的激活状态
  items.value.forEach((i) => (i.isActive = i === item));
  // 滚动到目标位置
  if (item.target) {
    const targetElement = document.querySelector(item.target);

    if (targetElement) {
      // 直接滚动到id对应组件的位置，但会被页面顶部导航栏遮挡
      // targetElement.scrollIntoView({ behavior: 'smooth' });

      // 重新计数滚动距离，以避开页面顶部导航栏
      const targetElement = document.querySelector(item.target);
      if (targetElement) {
        // 获取当前的滚动位置
        const currentScroll = window.scrollY;

        // 获取目标元素相对于视口的位置
        const rect = targetElement.getBoundingClientRect();

        // 计算目标元素顶部距离视口顶部的距离
        const distanceToTop = rect.top;

        // 计算新的滚动位置
        const newScrollPosition = currentScroll + distanceToTop - 81; // 减去 60px 作为偏移量

        // 平滑滚动到新位置
        window.scrollTo({
          top: newScrollPosition,
          behavior: 'smooth',
        });
      }
    }
  }
}
</script>

<style scoped>
.sidebar {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 30%;
  left: 5px;
  /* height: 640px; */
  /* width: 60px; */
  /* padding: 1rem; */
  z-index: 99;
  /* border: 1px solid #333; */
}

.sidebar-nav {
  width: 100%;
  height: 100%;
}

.sidebar-nav ul {
  width: 100%;
  height: 100%;
  padding: 0;
  list-style-type: none;
}

.sidebar-nav li {
  width: 60px;
  height: 60px;
  margin: 1px 0;
  /* border-radius:15px; */
  /* background-color: #ffffff; */
}

.sidebar-nav a {
  width: 100%;
  height: 100%;
  color: #333;
  font-size: 1rem;
  border-radius: 10px;
  /* padding: 30px; */
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
}

.sidebar-nav a:hover {
  cursor: pointer;
}
.sidebar-nav a.active {
  background-color: #a9f8b5;
}
</style>
