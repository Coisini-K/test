<!-- 路由导航栏 -->

<template>
  <div ref="navbarRef" class="navbar">
    <nav>
      <RouterLink
        to="/test1"
        class="nav-link"
        :class="{ active: isActive('/test1') }"
        >测试1</RouterLink
      >
      <RouterLink
        to="/test2"
        class="nav-link"
        :class="{ active: isActive('/test2') }"
        >测试2</RouterLink
      >
      <RouterLink to="/" class="nav-link" :class="{ active: isActive('/') }"
        >首页</RouterLink
      >
      <RouterLink
        to="/supply"
        class="nav-link"
        :class="{ active: isActive('/supply') }"
        >供应大厅</RouterLink
      >
      <RouterLink
        to="/procurement"
        class="nav-link"
        :class="{ active: isActive('/procurement') }"
        >采购大厅</RouterLink
      >
      <RouterLink
        to="/market"
        class="nav-link"
        :class="{ active: isActive('/market') }"
        >行情大厅</RouterLink
      >
      <RouterLink
        to="/bigdata"
        class="nav-link"
        :class="{ active: isActive('/bigdata') }"
        >惠农大数据</RouterLink
      >
      <RouterLink
        to="/news"
        class="nav-link"
        :class="{ active: isActive('/news') }"
        >行业资讯</RouterLink
      >
      <RouterLink
        to="/mall"
        class="nav-link"
        :class="{ active: isActive('/mall') }"
        >严选商城</RouterLink
      >
      <RouterLink
        to="/npt"
        class="nav-link"
        :class="{ active: isActive('/npt') }"
        >农批通</RouterLink
      >
      <RouterLink
        to="/tuliu"
        class="nav-link"
        :class="{ active: isActive('/tuliu') }"
        >土流网</RouterLink
      >
    </nav>
  </div>
  <!-- <RouterView /> -->
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';
import { RouterLink, useRoute } from 'vue-router';
import useMainStore from '@/stores';
const mainStore = useMainStore();
// 默认清除左侧电梯导航栏
const clearBar = () => {
  mainStore.clearBar();
};

// 定义一个引用，用于获取导航栏元素
const navbarRef = ref(null);

// 获取当前路由对象
const route = useRoute();

/**
 * 判断当前路由是否匹配指定路径
 * @param {string} path - 需要判断的路径
 * @returns {boolean} - 当前路由是否匹配指定路径
 */
const isActive = (path) => {
  return route.path === path;
};

// 获取第一个导航链接
const firstGroup = () => {
  const firstLink = navbarRef.value.querySelector('.nav-link');
  if (firstLink) {
    // 为第一个链接添加 active 类
    // firstLink.classList.add('active');
  }
};

// 在组件挂载时，默认激活第一个链接
onMounted(() => {
  firstGroup();
});

/**
 * 监听路由变化，更新活动链接
 */
watch(route, () => {
  clearBar();
  // 获取所有导航链接
  const links = navbarRef.value.querySelectorAll('.nav-link');
  links.forEach((link) => {
    // 移除所有链接的 active 类
    link.classList.remove('active');
  });

  // 根据当前路由路径查找对应的活动链接
  const activeLink = navbarRef.value.querySelector(
    `.nav-link[href="#${route.path}"]`
  );
  if (activeLink) {
    // 为活动链接添加 active 类
    activeLink.classList.add('active');
  } else {
    // firstGroup();
  }
});
</script>

<style scoped>
.navbar {
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

nav {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  /* padding: 10px 0; */
}

.nav-link {
  color: #555;
  padding: 8px 12px;
  margin: 0 8px;
  font-size: 1.2rem;
  font-weight: bold;
  border-radius: 7px;
}
</style>
