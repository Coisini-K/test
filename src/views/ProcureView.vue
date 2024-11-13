<template>
    <div class="container">
        <div class="list">
            <HotRecommend />
        </div>
        <div class="container_box">
            <div class="left">
                <TableForm />
            </div>
            <div class="right">
                <div class="word">
                    <WordCloud />
                </div>
                <div class="echarts">
                    <div class="echarts_title">
                        <p>行情动态</p>
                        <!-- <a href="#" @click.prevent="navigateToDo"> 更多&#32;&#10095; </a> -->
                        <router-link to="/market" class="link"
                            >更多&#32;&#10095;</router-link
                        >
                    </div>
                    <EchartsStore :options="chartOptions" height="200px" />
                </div>
                <div class="product">
                    <ProductNews :news="news_3" />
                </div>
            </div>
        </div>

        <div class="footer">
            <SectionsModule />
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import HotRecommend from '@/components/procure/HotRecommend.vue';
import TableForm from '@/components/procure/TableForm.vue';
import WordCloud from '@/components/procure/WordCloud.vue';
import EchartsStore from '@/components/public/EchartsStore.vue';
import ProductNews from '@/components/market/ProductNews.vue';
import SectionsModule from '@/components/public/SectionsModule.vue';

import { getDates } from '@/utils/dateUtils';
import { news_3 } from '@/constants/home';
// 定义曲线图Y轴数据 日期
const dates = getDates(null, 'MM-DD');
// console.log(dates);
const seriesData = [25, 26, 24.5, 27, 25.5, 27, 26.5];

// 计算曲线图Y轴最值和平均值
const maxVal = computed(() => Math.round(Math.max(...seriesData) * 100) / 100);
// console.log(maxVal);
const minVal = computed(() => Math.round(Math.min(...seriesData) * 100) / 100);
// console.log(minVal.value);
const avgVal = computed(
    () => seriesData.reduce((sum, val) => sum + val, 0) / seriesData.length
);

const averageWeeklyPrice = Math.round(avgVal.value * 100) / 100;
const averageTxt = averageWeeklyPrice + '元/斤';

// 曲线图Y轴范围
const echartsYDifference = ref((maxVal.value - minVal.value) / 4);
// Y轴最值
const echartsYMax = Math.round(maxVal.value + echartsYDifference.value);
const echartsYMin = Math.round(minVal.value - echartsYDifference.value);
const echartsYInterval = Math.round((echartsYMax - echartsYMin) / 8);

const chartOptions = ref({
    animation: true,
    animationDuration: 1000,
    title: {
        text: '猫牙米',
        subtext: averageTxt,
        left: 'left',
        textStyle: {
            fontSize: 16,
            color: '#39bf3e',
        },
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
        },
        feature: {
            saveAsImage: {},
            dataView: { readOnly: false },
            magicType: { type: ['line', 'bar'] },
            restore: {},
        },
    },
    grid: {
        top: '25%',
        left: '5%',
        right: '2%',
        bottom: '15%',
        containLabel: true,
    },
    xAxis: {
        type: 'category',
        data: dates.datesOfWeek,
    },
    yAxis: {
        type: 'value',
        // name: '价格',
        min: echartsYMax,
        max: echartsYMin,
        interval: echartsYInterval,
    },
    series: [
        {
            name: '价格',
            type: 'line',
            smooth: true,
            data: seriesData,
            color: ['#007bff'],
            markPoint: {
                data: [
                    { type: 'max', name: '最大值' },
                    { type: 'min', name: '最小值' },
                ],
            },
            markLine: {
                data: [{ type: 'average', name: '平均值' }],
            },
        },
    ],
});
</script>

<style scoped>
.container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: 10px;
}

.list {
    width: 100%;
    height: 240px;
    background-color: #fff;
}

.container_box {
    width: 100%;
    height: 720px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
}

.left {
    width: 900px;
    height: 100%;
    background-color: #fff;
}

.right {
    width: 290px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
}

.word {
    width: 100%;
    height: 260px;
    /* padding-top: 20px; */
    background-color: #fff;
}

.echarts {
    width: 100%;
    height: 240px;
    /* padding: 0 15px; */
    background-color: #fff;
}

.echarts_title {
    width: 100%;
    height: 40px;
    font-size: 16px;
    padding-right: 10px;
    /* margin-top: 10px; */
    /* padding:10px  15px 0 15px; */
    background-color: #eee;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
}

.echarts_title p {
    height: 100%;
    width: 100px;
    border-top: 3px solid #39bf3e;
    /* text-align: center; */
    background-color: #fff;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
}

.product {
    width: 100%;
    height: 200px;
}

.footer {
    width: 100%;
}
</style>
