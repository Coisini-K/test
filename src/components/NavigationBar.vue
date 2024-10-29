<!-- 路由导航栏 -->

<template>
  <div ref="navbarRef" class="navbar">
    <nav>
      <RouterLink v-once :to="homePath" class="nav-link">Home</RouterLink>
      <RouterLink v-once :to="aboutPath" class="nav-link">About</RouterLink>
      <RouterLink v-once :to="otherPath" class="nav-link">Other</RouterLink>
      <RouterLink v-once :to="supplyPath" class="nav-link">Supply</RouterLink>
    </nav>
  </div>
  <!-- <RouterView /> -->
</template>

<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
import {
  HOME_PATH,
  ABOUT_PATH,
  OTHER_PATH,
  SUPPLY_PATH,
} from '@/constants/routes';

const navbarRef = ref(null);
const homePath = ref(HOME_PATH);
const aboutPath = ref(ABOUT_PATH);
const otherPath = ref(OTHER_PATH);
const supplyPath = ref(SUPPLY_PATH);
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
  justify-content: center;
  padding: 10px 0;
  /* box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); */
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

</style>
