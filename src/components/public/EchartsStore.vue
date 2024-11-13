<!-- 曲线趋势图 -->

<template>
    <!-- 使用 ref 属性获取 DOM 元素引用，动态设置宽度和高度 -->
    <div ref="chartContainer" :style="{ width: width, height: height }"></div>
</template>

<script setup>
// 导入 Vue 的响应式 API 和 ECharts 库
import { ref, onMounted, onBeforeUnmount, watch } from 'vue';
import * as echarts from 'echarts';
// import VChart from 'vue-echarts';

// 定义组件的属性
const props = defineProps({
    // 设置宽度，默认值为 100%
    width: {
        type: String,
        default: '100%',
    },
    // 设置高度，默认值为 400px
    height: {
        type: String,
        default: '100%',
    },
    // ECharts 的配置项，为必传项
    options: {
        type: Object,
        required: true,
    },
});

// 使用 ref 创建对图表容器的引用
const chartContainer = ref(null);
// 用于存储 ECharts 实例
let chartInstance = null;

// 在组件挂载时初始化图表
onMounted(() => {
    chartInstance = echarts.init(chartContainer.value);
    chartInstance.setOption(props.options);
});

// 在组件卸载前销毁图表实例，防止内存泄漏
onBeforeUnmount(() => {
    if (chartInstance) {
        chartInstance.dispose();
        chartInstance = null;
    }
});

// 监听 options 属性的变化，动态更新图表配置
watch(
    () => props.options,
    (newOptions) => {
        if (chartInstance) {
            chartInstance.setOption(newOptions);
        }
    }
);
</script>

<style scoped>
/* 你可以在这里添加一些样式 */
</style>
