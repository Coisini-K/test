<template>
  <div class="sidebar">
    <div class="sidebar-header"></div>
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
import { computed, watchEffect } from 'vue';
import useMainStore from '@/stores';
const mainStore = useMainStore();

// 创建一个计算属性，依赖于 mainStore.bar
const items = computed(() => {
  const barItems = mainStore.bar;
  // console.log('Computed bar value:', barItems);
  return barItems;
});

// 使用 vue 的 watchEffect 来监听 items 的变化
// watchEffect(() => {
// console.log('Watched items value:', items.value);
// });

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
        const newScrollPosition = currentScroll + distanceToTop - 60; // 减去 60px 作为偏移量

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
  top: 0;
  left: 0;
  height: 100%;
  width: 120px;
  background-color: #f8f9fa;
  padding: 1rem;
  z-index: 99;
}

.sidebar-header {
  margin-bottom: 1rem;
}

.sidebar-nav ul {
  list-style-type: none;
  padding: 0;
}

.sidebar-nav a {
  display: block;
  padding: 0.5rem;
  text-decoration: none;
  color: #333;
  transition: background-color 0.3s ease;
}

.sidebar-nav a:hover,
.sidebar-nav a.active {
  background-color: #e9ecef;
}
</style>
