<!--
use:
<CarouselComponent :slides="photos" :interval="3000" />

const photos = [
	'/src/assets/images/carousel/1.jpg',
]
-->

<template>
	<div class="carousel">
		<div
			class="carousel-track"
			:style="{ transform: `translateX(${currentSlide * -100}%)` }"
		>
			<div v-for="(slide, index) in slides" :key="index" class="carousel-slide">
				<img :src="slide" alt="" />
			</div>
		</div>

		<button class="carousel-arrow carousel-arrow-left" @click="prevSlide">
			<span>&#10094;</span>
		</button>

		<button class="carousel-arrow carousel-arrow-right" @click="nextSlide">
			<span>&#10095;</span>
		</button>

		<div class="carousel-dots">
			<span
				v-for="(slide, index) in slides"
				:key="index"
				:class="{ 'dot-active': currentSlide === index }"
				@click="goToSlide(index)"
			>
			</span>
		</div>
	</div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps({
	slides: {
		type: Array,
		required: true,
	},
	interval: {
		type: Number,
		default: 3000,
	},
})

console.log(props.slides)

const currentSlide = ref(0)
let autoplayInterval

const nextSlide = () => {
	currentSlide.value = (currentSlide.value + 1) % props.slides.length
}

const prevSlide = () => {
	currentSlide.value =
		(currentSlide.value - 1 + props.slides.length) % props.slides.length
}

const goToSlide = index => {
	currentSlide.value = index
}

const startAutoplay = () => {
	if (props.interval > 0) {
		autoplayInterval = setInterval(nextSlide, props.interval)
	}
}

const stopAutoplay = () => {
	if (autoplayInterval) {
		clearInterval(autoplayInterval)
	}
}

onMounted(() => {
	startAutoplay()
})

onUnmounted(() => {
	stopAutoplay()
})
</script>

<style scoped>
.carousel {
	position: relative;
	overflow: hidden;
	width: 600px;
	/* margin: 10px; */
	height: 340px;
}

.carousel-track {
	display: flex;
	transition: transform 0.5s ease-in-out;
	min-width: 100%;
	height: 100%;
}

.carousel-slide {
	min-width: 100%;
	height: 100%;
	position: relative;
}

.carousel-slide img {
	width: 100%;
	height: 100%;
	object-fit: cover;
}

.carousel-arrow {
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
	background-color: rgba(0, 0, 0, 0.5);
	color: #fff;
	border: none;
	padding: 10px;
	cursor: pointer;
	z-index: 1;
}

.carousel-arrow-left {
	left: 10px;
}

.carousel-arrow-right {
	right: 10px;
}

.carousel-arrow:hover {
	transform: scale(1.1);
}

.carousel-dots {
	text-align: center;
	/* margin-top: 10px; */
	position: relative;
	top: -30px;
	width: 100%;
	height: 5%;
}

.carousel-dots span {
	display: inline-block;
	width: 10px;
	height: 10px;
	border-radius: 50%;
	background-color: #bbb;
	margin: 0 5px;
	cursor: pointer;
}

.carousel-dots .dot-active {
	background-color: #777;
}

.carousel-dots span:hover {
	transform: scale(1.2);
}
</style>
