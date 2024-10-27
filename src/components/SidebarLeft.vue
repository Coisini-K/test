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
import { computed } from 'vue';
import useMainStore from '@/stores';
const mainStore = useMainStore();

// 创建一个计算属性，依赖于 mainStore.bar
const items = computed(() => {
  const barItems = mainStore.bar;
  // console.log("Computed bar value:", barItems);
  return barItems;
});

// 使用 vue 的 watchEffect 来监听 items 的变化
// watchEffect(() => {
  // console.log("Watched items value:", items.value);
// });

function navigate(item) {
  items.value.forEach((i) => (i.isActive = i === item));
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