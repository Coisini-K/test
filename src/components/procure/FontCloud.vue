<!-- 未完成待优化 -->

<template>
    <div class="box">
        <h1>近7天热门采购榜</h1>
        <canvas ref="canvas" class="word-cloud" @wheel="handleZoom"></canvas>
    </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

const words = [
    { text: '玉米' },
    { text: '鸡蛋' },
    { text: '柑桔' },
    { text: '大米' },
    { text: '苹果' },
    { text: '红薯' },
    { text: '橙子' },
];

const canvas = ref(null);
const distanceScale = ref(1); // 单词距离缩放比例
const centerX = ref(0);
const centerY = ref(0);
const fontSize = 20; // 初始字体大小

const drawWord = (ctx, word, index) => {
    const maxRadius = Math.min(centerX.value, centerY.value) * 1.2; // 最大半径
    const angle = (index / words.length) * 2 * Math.PI; // 角度
    const distance = (index / words.length) * maxRadius * distanceScale.value; // 距离中心点的距离

    const x = centerX.value + distance * Math.cos(angle);
    const y = centerY.value + distance * Math.sin(angle);

    ctx.font = `${fontSize}px Arial`;
    ctx.fillStyle = 'black';
    ctx.fillText(word.text, x, y);
};

const drawFontCloud = () => {
    if (canvas.value) {
        const ctx = canvas.value.getContext('2d');
        ctx.clearRect(0, 0, canvas.value.width, canvas.value.height);
        centerX.value = canvas.value.width / 2;
        centerY.value = canvas.value.height / 2;

        words.forEach((word, index) => drawWord(ctx, word, index));
    }
};

const handleZoom = (event) => {
    event.preventDefault();
    if (event.deltaY < 0) {
        distanceScale.value *= 1.1; // 增加距离
    } else {
        distanceScale.value /= 1.1; // 减少距离
    }
    drawFontCloud();
};

onMounted(() => {
    drawFontCloud();
});

onBeforeUnmount(() => {
    // 清理事件监听器
});
</script>

<style scoped>
.box {
    width: 100%;
    height: 100%;
    padding: 20px;
}

.word-cloud {
    border: 1px solid black;
    width: 100%;
    height: 100%;
}
</style>
