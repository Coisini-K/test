<!-- 路由导航栏 -->

<template>
  <div ref="navbarRef" class="navbar">
    <nav>
      <RouterLink v-once to="/" class="nav-link">测试1</RouterLink>
      <RouterLink v-once to="/about" class="nav-link">测试2</RouterLink>
      <RouterLink v-once to="/other" class="nav-link">首页</RouterLink>
      <RouterLink v-once to="/supply" class="nav-link">供应大厅</RouterLink>
      <RouterLink v-once to="/" class="nav-link">采购大厅</RouterLink>
      <RouterLink v-once to="/" class="nav-link">行情大厅</RouterLink>
      <RouterLink v-once to="/" class="nav-link">惠农大数据</RouterLink>
      <RouterLink v-once to="/" class="nav-link">行业资讯</RouterLink>
      <RouterLink v-once to="/" class="nav-link">严选商城</RouterLink>
      <RouterLink v-once to="/" class="nav-link">农批通</RouterLink>
      <RouterLink v-once to="/" class="nav-link">土流网</RouterLink>
    </nav>
  </div>
  <!-- <RouterView /> -->
</template>

<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';

const navbarRef = ref(null);
</script>

<style scoped>
.navbar {
  width: 100%;
  position: relative;
  /* display: flex;
	flex-direction: column;
	align-content: center;
	justify-content: center; */
  /* background-color: #fff; */
  /* z-index: 1000; */
  transition: all 0.3s ease-out;
}

nav {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content : flex-start;
  padding: 10px 0;
  /* box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); */
}

.nav-link {
  margin: 0 1rem;
  text-decoration: none;
  color: #333;
  font-weight: bold;
  transition:0.5s ease;
}

.nav-link:hover {
  cursor: pointer;
  background-color: #a9f8b5;
  /* 悬停颜色 */
}

.nav-link.active {
  background-color: #a9f8b5;
  /* 激活颜色 */
}
</style>
