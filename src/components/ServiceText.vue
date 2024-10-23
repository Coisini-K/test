<template>
	<div class="service-text">
		{{ text }}
	</div>
</template>

<script setup>
// 定义 props
const props = defineProps({
	text: {
		type: String,
		required: true,
	},
})

// 使用 props
const text = props.text
</script>

<style scoped>
.service-text {
	/* width: 100%; */
	position: relative;
	display: inline-block;
	padding: 0 16px;
	margin: 8px;
	font-size: 18px;
	color: #333;
	font-weight: bold;
	white-space: nowrap;
	text-align: center; /* 默认居中文本 */
}

.service-text::before,
.service-text::after {
	content: '';
	position: absolute;
	top: 50%;
	width: 100%;
	height: 1px; /* 线的厚度 */
	background-color: #666; /* 线的颜色 */
}

.service-text::before {
	/* width: 30%; */
	left: -100%; /* 向左延伸 */
}

.service-text::after {
	/* width: 30%; */
	right: -100%; /* 向右延伸 */
}
</style>
