<!-- 轮播图组件 -->
<template>
  <div class="carousel">
    <!-- 轮播图轨道，使用 transform 属性来平滑地移动幻灯片 -->
    <div
      class="carousel-track"
      :style="{ transform: `translateX(${currentSlide * -100}%)` }"
    >
      <!-- 循环渲染每张幻灯片 -->
      <div v-for="(slide, index) in slides" :key="index" class="carousel-slide">
        <img :src="slide" alt="" />
      </div>
    </div>
    <!-- 左箭头按钮 -->
    <button class="carousel-arrow carousel-arrow-left" @click="prevSlide">
      <span>&#10094;</span>
      <!-- 左箭头符号 -->
    </button>
    <!-- 右箭头按钮 -->
    <button class="carousel-arrow carousel-arrow-right" @click="nextSlide">
      <span>&#10095;</span>
      <!-- 右箭头符号 -->
    </button>
    <!-- 指示点，显示当前幻灯片的位置，并允许用户点击跳转到特定的幻灯片 -->
    <div class="carousel-dots">
      <span
        v-for="(slide, index) in slides"
        :key="index"
        :class="{ 'dot-active': currentSlide === index }"
        @click="goToSlide(index)"
      ></span>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue';

export default {
  name: 'CarouselComponent',
  // 组件的 props 定义
  props: {
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
  },
  setup(props) {
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
    onMounted(() => {
      startAutoplay();
    });

    // 组件卸载时停止自动播放
    onUnmounted(() => {
      stopAutoplay();
    });

    // 返回组件的方法和数据
    return {
      currentSlide,
      nextSlide,
      prevSlide,
      goToSlide,
    };
  },
};
</script>

<style scoped>
/* 轮播图容器 */
.carousel {
  position: relative;
  overflow: hidden;
  width: 60%; /* 你可以根据需要调整宽度 */
  margin-right: 10px;
  height: 300px;
  box-shadow: 2px 2px 5px 0 rgba(0, 0, 0, 0.2);
}

/* 轮播图轨道 */
.carousel-track {
  display: flex;
  transition: transform 0.5s ease-in-out;
  min-width: 100%;
  height: 100%;
}

/* 单个幻灯片 */
.carousel-slide {
  min-width: 100%;
  height: 100%;
  position: relative; /* 确保 img 元素可以相对于 .carousel-slide 定位 */
}

/* 幻灯片中的图片 */
.carousel-slide img {
  width: 100%;
  height: 100%;
  object-fit: cover; /* 保持图片比例并填充容器，可能会裁剪部分图片 */
}

/* 导航箭头按钮 */
.carousel-arrow {
  position: absolute;
  top: 50%;
  /* transform: translateY(-10%); */
  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;
  border: none;
  padding: 10px;
  cursor: pointer;
  z-index: 1;
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
  transform: scale(1.1); /* 放大到原来的1.2倍 */
}
/* 指示点容器 */
.carousel-dots {
  text-align: center;
  margin-top: -30px;
  position: relative; /* 绝对定位 */
  z-index: 2;
}

/* 指示点样式 */
.carousel-dots span {
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #bbb;
  margin: 0 5px;
  cursor: pointer;
}

/* 当前激活的指示点样式 */
.carousel-dots .dot-active {
  background-color: #777;
}

.carousel-dots span:hover {
  transform: scale(1.2); /* 放大到原来的1.2倍 */
  /* background-color: rgb(89, 219, 154) */
}
</style>
