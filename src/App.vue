<script setup>
import { RouterView } from 'vue-router'
// import NavigationBar from '@/components/NavigationBar.vue'
import HeaderView from '@/views/HeaderView.vue'
import SidebarView from '@/components/SidebarRight.vue'
</script>

<template>
	<div class="container">
		<HeaderView />
		<SidebarView />
		<RouterView />
	</div>
</template>

<style scoped>
.container {
	border: 1px solid #ccc;
}
</style>
