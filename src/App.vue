<script setup>
import { RouterView } from 'vue-router'
import NavigationBar from './components/NavigationBar.vue'
// import SidebarView from './components/SidebarRight.vue'
</script>

<template>
	<NavigationBar />
	<!-- <SidebarView /> -->
	<RouterView />
</template>

<style scoped></style>
