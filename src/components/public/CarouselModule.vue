<!-- 轮播图组件 -->

<!--
use:

<CarouselComponent :slides="photos" :interval="3000" />

const photos = [
	'/src/assets/images/carousel/1.jpg',
]
-->

<template>
    <div class="carousel">
        <!-- 轮播图轨道，使用 transform 属性来平滑地移动幻灯片 -->
        <div
            class="carousel-track"
            :style="{ transform: `translateX(${currentSlide * -100}%)` }"
        >
            <!-- 循环渲染每张幻灯片 -->
            <div
                v-for="(slide, index) in photos"
                :key="index"
                class="carousel-slide"
            >
                <img :src="slide" alt="" />
            </div>
        </div>

        <!-- 左箭头按钮 -->
        <button class="carousel-arrow carousel-arrow-left" @click="prevSlide">
            <!-- 左箭头符号 -->
            <span>&#10094;</span>
        </button>

        <!-- 左箭头符号 -->
        <button class="carousel-arrow carousel-arrow-right" @click="nextSlide">
            <!-- 右箭头符号 -->
            <span>&#10095;</span>
        </button>

        <!-- 指示点，显示当前幻灯片的位置，并允许用户点击跳转到特定的幻灯片 -->
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
import { ref, onMounted, onUnmounted } from 'vue';

// 组件的 props 定义
const props = defineProps({
    // 幻灯片数组，必需
    slides: {
        type: Array,
        required: true,
    },
    // 自动播放间隔时间，默认为3秒
    interval: {
        type: Number,
        default: 3000,
    },
});

// console.log(props.slides);

// 当前显示的幻灯片索引
const currentSlide = ref(0);
let autoplayInterval;

// 切换到下一张幻灯片
const nextSlide = () => {
    currentSlide.value = (currentSlide.value + 1) % props.slides.length;
};

// 切换到上一张幻灯片
const prevSlide = () => {
    currentSlide.value =
        (currentSlide.value - 1 + props.slides.length) % props.slides.length;
};

// 跳转到指定索引的幻灯片
const goToSlide = (index) => {
    currentSlide.value = index;
};

// 启动自动播放
const startAutoplay = () => {
    if (props.interval > 0) {
        autoplayInterval = setInterval(nextSlide, props.interval);
    }
};

// 停止自动播放
const stopAutoplay = () => {
    if (autoplayInterval) {
        clearInterval(autoplayInterval);
    }
};

// 组件挂载时启动自动播放
const photos = ref([]);
onMounted(() => {
    photos.value = props.slides.map(
        (path) => new URL(path, import.meta.url).href
    );
    startAutoplay();
});

// 组件卸载时停止自动播放
onUnmounted(() => {
    stopAutoplay();
});
</script>

<style scoped>
/* 轮播图容器 */
.carousel {
    position: relative;
    overflow: hidden;
    width: 100%;
    /* margin: 10px; */
    height: 340px;
    /* box-shadow: 1px 1px 3px 2px #ccc; */
}

/* 轮播图轨道 */
.carousel-track {
    display: flex;
    transition: transform 1s ease-in-out;
    width: 100%;
    height: 100%;
}

/* 单个幻灯片 */
.carousel-slide {
    min-width: 100%;
    height: 100%;
    position: relative;
}

/* 幻灯片中的图片 */
.carousel-slide img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    /* 保持图片比例并填充容器，可能会裁剪部分图片 */
}

/* 导航箭头按钮 */
.carousel-arrow {
    position: absolute;
    top: 45%;
    /* transform: translateY(-50%); */
    background-color: transparent;
    color: #fff;
    border: none;
    padding: 10px;
    cursor: pointer;
}

/* 左箭头按钮 */
.carousel-arrow-left {
    left: 10px;
}

/* 右箭头按钮 */
.carousel-arrow-right {
    right: 10px;
}

/* 悬浮时的箭头按钮样式 */
.carousel-arrow:hover {
    transform: scale(1.1);
}

/* 指示点容器 */
.carousel-dots {
    text-align: center;
    /* margin-top: 10px; */
    position: relative;
    top: -30px;
    width: 100%;
    height: 5%;
}

/* 指示点样式 */
.carousel-dots span {
    display: inline-block;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #ccc;
    margin: 0 5px;
    cursor: pointer;
}

/* 当前激活的指示点样式 */
.carousel-dots .dot-active {
    background-color: #666;
}

.carousel-dots span:hover {
    transform: scale(1.2);
}
</style>
