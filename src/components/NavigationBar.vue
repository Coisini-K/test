<template>
  <div ref="navbarRef">
    <nav :class="{ 'is-fixed': isSticky }">
      <RouterLink v-once :to="homePath" class="nav-link">Home</RouterLink>
      <RouterLink v-once :to="aboutPath" class="nav-link">About</RouterLink>
      <RouterLink v-once :to="otherPath" class="nav-link">Other</RouterLink>
      <RouterLink v-once :to="homePath" class="nav-link">Home</RouterLink>
      <RouterLink v-once :to="aboutPath" class="nav-link">About</RouterLink>
      <RouterLink v-once :to="otherPath" class="nav-link">Other</RouterLink>
      <RouterLink v-once :to="homePath" class="nav-link">Home</RouterLink>
      <RouterLink v-once :to="aboutPath" class="nav-link">About</RouterLink>
      <RouterLink v-once :to="otherPath" class="nav-link">Other</RouterLink>
    </nav>
  </div>
  <!-- <RouterView /> -->
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue';
import { RouterLink } from 'vue-router';
import { HOME_PATH, ABOUT_PATH, OTHER_PATH } from '@/constants/routes';

const navbarRef = ref(null);
const homePath = ref(HOME_PATH);
const aboutPath = ref(ABOUT_PATH);
const otherPath = ref(OTHER_PATH);

const isSticky = ref(false);

const handleScroll = () => {
  if (window.scrollY > 0) {
    isSticky.value = true;
  } else {
    isSticky.value = false;
  }
};

onMounted(() => {
  // 监听滚动事件
  // window.addEventListener('scroll', handleScroll)

  // 初始化状态
  handleScroll();
});

onUnmounted(() => {
  // 移除滚动监听器
  // window.removeEventListener('scroll', handleScroll)
});
</script>

<style scoped>
.navbarRef {
  width: 100%;
  position: relative;
  /* display: flex;
	flex-direction: column;
	align-content: center;
	justify-content: center; */
  background-color: #fff;
  /* z-index: 1000; */
  transition: all 0.3s ease-out;
}

nav {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.nav-link {
  margin: 0 1rem;
  text-decoration: none;
  color: #333;
  font-weight: bold;
  transition: color 0.3s ease;
}

.nav-link:hover {
  color: #007bff;
}

nav.is-fixed {
  position: fixed;
  width: 100%;
  top: 0;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  z-index: 100;
}
</style>
