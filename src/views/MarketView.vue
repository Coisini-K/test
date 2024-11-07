<template>
    <div class="title">
        <p>当前位置>行情大厅>蔬菜>元蘑>吉林通化东昌区</p>
    </div>
    <div class="container">
        <div class="left">
            <div class="main">
                gn
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
            <div class="content">
                <table>
                    <thead>
                        <tr>
                            <th>时间</th>
                            <th>产品/品种</th>
                            <th>所在产地</th>
                            <th>价格</th>
                            <th>升/降</th>
                            <th>走势图</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item in products" :key="item.id">
                            <td>{{ item.date }}</td>
                            <td>{{ item.product }}</td>
                            <td>{{ item.location }}</td>
                            <td>{{ item.price }}</td>
                            <td>{{ item.trend }}</td>
                            <td class="unit">
                                <a :href="item.chartLink"> 查看走势 </a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div class="right">
            <div class="contact">
                <div>获取更多数据服务，请联系</div>
                <p><span class="icon phone-icon"></span>电话: 400-008-8888</p>
                <p><span class="icon email-icon"></span>邮箱: hkq@qzh.cn</p>
            </div>
            <ProductNews :news="news_1" />
            <ProductNews :news="news_2" />
        </div>
    </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
// 左侧资讯组件
import { getDates } from '@/utils/dateUtils';
import { news_1, news_2 } from '@/constants/home';
import ProductNews from '@/components/market/ProductNews.vue';
// 引入计算日期的方法
// 导入EchartsStore组件
import EchartsStore from '@/components/public/EchartsStore.vue';
import HandoffDAte from '@/components/public/HandoffDAte.vue';

// 定义曲线图Y轴数据 日期
const dates = getDates(null, 'MM-DD');
// console.log(dates);
const seriesData = [29.5, 29, 24.5, 32, 19.5, 22.5, 27.5];

// 计算曲线图Y轴最值和平均值
const maxVal = computed(() => Math.round(Math.max(...seriesData) * 100) / 100);
console.log(maxVal);
const minVal = computed(() => Math.min(...seriesData));
minVal.value = Math.round(minVal.value * 100) / 100;
console.log(minVal.value);
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
const echartsYDifference = ref((maxVal.value - minVal.value) / 4);
// Y轴最值
const echartsYMax = Math.round(maxVal.value + echartsYDifference.value);
const echartsYMin = Math.round(minVal.value - echartsYDifference.value);
const echartsYInterval = Math.round((echartsYMax - echartsYMin) / 4);

// 定义一个响应式数组 products
const products = ref([
    {
        id: 1,
        date: '2024-10-31',
        product: '元蘑',
        location: '吉林通化市东昌区',
        price: '59.5元/斤',
        trend: '-',
        chartLink: '#',
    },
    {
        id: 2,
        date: '2024-10-30',
        product: '香菇',
        location: '浙江丽水市莲都区',
        price: '60.0元/斤',
        trend: '+',
        chartLink: '#',
    },
    {
        id: 3,
        date: '2024-10-29',
        product: '木耳',
        location: '四川广元市利州区',
        price: '58.5元/斤',
        trend: '-',
        chartLink: '#',
    },
]);

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
    border: 1px solid #ddd;
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
    gap: 30px;
}

.title {
    width: 100%;
    height: 30px;
    /* border: 1px solid #ddd; */
}

.main {
    width: 100%;
    height: 420px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    border: 1px solid #ddd;
    box-shadow: 1px 1px 3px 1px #ccc;
}

.echarts {
    width: 600px;
    height: 100%;
    display: flex;
    padding-top: 10px;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    /* border: 1px solid #ddd; */
}

.info {
    width: 270px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    /* border: 1px solid #ddd; */
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

.info_box .unit {
    padding: 8px 16px;
    border-radius: 15px;
    color: #fff;
    background-color: #45b035;
}

.content {
    width: 100%;
    height: 600px;
    border: 1px solid #ddd;
    box-shadow: 1px 1px 3px 1px #ccc;
}

.content table {
    width: 100%;
    border-collapse: collapse;
}

.content th,
.content td {
    padding: 8px;
    text-align: center;
    /* border-bottom: 1px solid #ddd; */
}

.content tr:nth-child(even) {
    background-color: #f2f2f2;
}

.content td.unit a {
    padding: 6px 12px;
    /* border-radius: 15px; */
    color: #45b035;
}

.right {
    width: 300px;
    height: 100%;
    gap: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    /* border: 1px solid #ddd; */
}

.contact {
    width: 100%;
    /* margin: 20px; */
    /* padding: 20px; */
    background-color: #fff;
    border-radius: 5px;
    /* display: flex;
    align-items: center;
    justify-content: space-between; */
    box-shadow: 1px 1px 3px 1px #ccc;
}

.contact div {
    font-size: 1.2rem;
    width: 100%;
    height: 42px;
    padding: 6px 12px;
    /* text-align: center; */
    color: #333;
    background-color: #eee;
}

.contact p {
    padding: 10px;
    /* font-size: 18px; */
    color: #999;
}

.contact .icon {
    display: inline-block;
    width: 20px;
    height: 20px;
    margin-right: 10px;
    vertical-align: middle;
}

.contact .phone-icon::before {
    content: '📞';
}

.contact .email-icon::before {
    content: '📧';
}
</style>
