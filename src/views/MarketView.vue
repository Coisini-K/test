<template>
    <div class="container">
        <div class="left">
            <div class="title">
                <p>当前位置>行情大厅>蔬菜>元蘑>吉林通化东昌区</p>
            </div>
            <div class="main">
                <div class="echarts">
                    <EchartsStore :options="chartOptions" height="300px" />
                    <div>吉林通化东昌区 元蘑</div>
                    <div>
                        <HandoffDAte />
                    </div>
                    <div>
                        开会员了解更多元蘑行情，看最佳买卖时机，找热门买卖地，定最赚买卖价格&#32;&#10095;
                    </div>
                </div>
                <div class="info">
                    <div class="section">查看该产地全部行情 &gt;</div>
                    <div class="info_box">
                        单位
                        <span class="unit"> 元/斤 </span>
                    </div>
                    <div class="section">当日价格</div>
                    <div class="info_box">
                        当日均价（元/斤）：
                        <span>
                            {{ dailyAveragePrice }}
                        </span>
                    </div>
                    <div class="info_box">
                        相对比前日：
                        <span>
                            {{ priceTrend }}
                        </span>
                    </div>
                    <div class="section">近7日价格</div>
                    <div class="info_box">
                        近7日最高价（元/斤）：
                        <span>
                            {{ highestWeeklyPrice }}
                        </span>
                    </div>
                    <div class="info_box">
                        近7日最低价（元/斤）：
                        <span>
                            {{ lowestWeeklyPrice }}
                        </span>
                    </div>
                    <div class="info_box">
                        近7日均价（元/斤）：
                        <span>
                            {{ averageWeeklyPrice }}
                        </span>
                    </div>
                </div>
            </div>
            <div class="content"></div>
        </div>
        <div class="right"></div>
    </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
// 引入计算日期的方法
import { getDates } from '@/utils/dateUtils';
// 导入EchartsStore组件
import EchartsStore from '@/components/EchartsStore.vue';
import HandoffDAte from '@/components/HandoffDAte.vue';

// 定义曲线图Y轴数据 日期
const dates = getDates(null, 'MM-DD');
// console.log(dates);
const seriesData = [29.5, 29, 24.5, 32, 19.5, 22.5, 27.5];

// 计算曲线图Y轴最值和平均值
const maxVal = computed(() => Math.max(...seriesData));
const minVal = computed(() => Math.min(...seriesData));
const avgVal = computed(
    () => seriesData.reduce((sum, val) => sum + val, 0) / seriesData.length
);

const dailyAveragePrice = ref(seriesData[6]);
const highestWeeklyPrice = ref(maxVal);
const lowestWeeklyPrice = ref(minVal);
const averageWeeklyPrice = Math.round(avgVal.value * 100) / 100;
let priceTrend = ref('价格平稳');
if (seriesData[6] > seriesData[5]) {
    priceTrend = ref('价格上涨');
} else if (seriesData[6] < seriesData[5]) {
    priceTrend = ref('价格下跌');
}

// 曲线图Y轴范围
const echartsYDifference = ref((maxVal.value - minVal.value) / 8);
// Y轴最值
const echartsYMax = Math.round(maxVal.value + echartsYDifference.value);
const echartsYMin = Math.round(minVal.value - echartsYDifference.value);
const echartsYInterval = Math.round((echartsYMax - echartsYMin) / 8);
// console.log(echartsYInterval);
// 定义图表配置选项
const chartOptions = ref({
    animation: true,
    animationDuration: 1000,
    title: {
        // text: '七天内行情趋势图',
        subtext: '七天内行情趋势图',
        left: 'center',
        textStyle: {
            fontSize: 16,
        },
    },
    legend: {
        data: ['价格'],
        orient: 'vertical',
        left: 'left',
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
    visualMap: {
        min: echartsYMin,
        max: echartsYMax,
        color: ['#FF0000', '#00FF00', '#0000FF'],
        calculable: true,
        text: [''],
        textStyle: {
            // width: 10,
            padding: [0, 0, 0, -12],
            align: 'left',
            fontSize: 10,
            // color: 'transparent'
            // 将文本颜色设置为透明，以隐藏文本
        },
    },
    grid: {
        top: '20%',
        left: '8%',
        right: '6%',
        bottom: '5%',
        containLabel: true,
    },
    dataZoom: [
        {
            type: 'slider',
            show: true,
            start: 0,
            end: 100,
        },
        {
            type: 'inside',
            start: 0,
            end: 100,
        },
    ],
    xAxis: {
        type: 'category',
        data: dates.datesOfWeek,
    },
    yAxis: {
        type: 'value',
        name: '价格',
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

onMounted(() => {
    // console.log("bar:", mainStore.bar);
});
</script>

<style scoped>
/* * {
    border: 1px solid #333;
} */

.container {
    width: 100%;
    height: 810px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
}

.left {
    width: 880px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: 10px;
    border: 1px solid #333;
}

.title {
    width: 100%;
    height: 30px;
    /* border: 1px solid #333; */
}

.main {
    width: 100%;
    height: 420px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    border: 1px solid #333;
}

.echarts {
    width: 600px;
    height: 100%;
    display: flex;
    padding-top: 10px;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    /* border: 1px solid #333; */
}

.info {
    width: 270px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    /* border: 1px solid #333; */
}

.section {
    width: 100%;
    height: 30px;
    padding-left: 10px;
    background-color: #eee;
    display: flex;
    align-items: center;
    justify-content: flex-start;
}

.info_box {
    width: 100%;
    height: 30px;
    padding: 0 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.unit {
    padding: 8px 16px;
    border-radius: 15px;
    color: #fff;
    background-color: #45b035;
}

.content {
    width: 100%;
    height: 200px;
    /* border: 1px solid #333; */
}

.right {
    width: 300px;
    height: 100%;
    border: 1px solid #333;
}
</style>
