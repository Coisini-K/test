<!-- HomeView.vue -->
<template>
	<div class="header">
		<NavigationBar />
	</div>
</template>

<script setup>
import NavigationBar from '@/components/NavigationBar.vue'
</script>

<style scoped>
.header {
	height: 320px;
	width: 1200px;
	margin: 10px;
	display: flex;
	flex-direction: column;
	align-content: center;
	justify-content: flex-end;
	border: 1px solid #ccc;
}
</style>
