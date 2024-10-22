<!-- HomeView.vue -->
<template>
	<div>
		<h1>Other</h1>
		<!-- 显示当前计数 -->
		<h1>计数: {{ mainStore.count }}</h1>
	</div>
</template>

<script setup>
import useMainStore from '@/stores'

const mainStore = useMainStore()
</script>

<style scoped>
i {
	margin: 10px;
}
</style>
