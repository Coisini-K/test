<!-- 文字列表滚动 -->

<!--
import LatestDeals from '@/components/home/LatestDeals.vue'

// 1.示例数据
const deals = [
	{ area: '北京', sellerName: '张三', productType: '电子产品' },
	{ area: '上海', sellerName: '李四', productType: '服装' },
	{ area: '广州', sellerName: '王五', productType: '家具' },
	// 更多数据...
]

// 2.或者单独生成单个列表
const areas = [
	'上海',
	'北京',
	'广州',
]
// 生成只包含 area 属性的对象数组
const deals = areas.map((area, index) => ({
	sellerName: `卖家${index + 1}`, // 示例生成卖家名称
	productType: `产品类型${index + 1}`, // 示例生成产品类型
	area: area, // 使用 areas 数组中的值
}))

// 3.除了deals是必须的，其他均可选
<LatestDeals
	:deals="deals"
	title=true
	info="最新成交"
	date="2024-10-19"
	iterations=100
/>

// 4.建议使用变量引用方式，提高可维护性和安全性
<LatestDeals
  :deals="deals"
  :title="title"
  :info="info"
  :date="date"
  :iterations="iterations"
/>
const deals = [...];
const title = true;
const info = '最新成交';
const date = '2024-10-19';
const iterations = 100;
-->
<template>
    <!-- 外层容器 -->
    <div class="div-box">
        <!-- 条件性显示的头部信息 -->
        <div class="box-header" v-if="info || date">
            <p v-if="info">{{ info }}</p>
            <p v-if="date">{{ date }}</p>
        </div>
        <!-- 表格容器 -->
        <div class="table-box">
            <table>
                <!-- 条件性显示的表头 -->
                <thead class="thead-header" v-if="title">
                    <tr>
                        <th>地区</th>
                        <th>卖家名称</th>
                        <th>出售品类</th>
                    </tr>
                </thead>
                <!-- 可滚动的表格主体 -->
                <tbody class="scrolling-table-body" ref="tableBody">
                    <tr
                        v-for="(deal, index) in visibleDeals"
                        :key="index"
                        :class="{ magnify: highlightedIndex === index }"
                        @mouseover="highlightRow(index)"
                        @mouseleave="unhighlightRow()"
                        @click="navigateToDeal(deal)"
                    >
                        <td class="magnify-main" v-if="deal.area">
                            {{ deal.area }}
                        </td>
                        <td class="magnify-main" v-if="deal.sellerName">
                            {{ deal.sellerName }}
                        </td>
                        <td class="magnify-main" v-if="deal.productType">
                            {{ deal.productType }}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

// 定义组件接收的属性
const props = defineProps({
    deals: { type: Array, required: true },
    title: { type: Boolean, default: false },
    info: { type: String, default: '' },
    date: { type: String, default: '' },
    iterations: { type: Number, default: 50 },
});

// 可见的交易数据
const visibleDeals = ref([]);
// 当前高亮的行索引
const highlightedIndex = ref(-1);
// 是否暂停滚动
const isScrollingPaused = ref(false);
// 表体的引用
const tableBody = ref(null);

// 组件挂载时执行数据的存储和重复
onMounted(() => {
    // console.log(props);
    storeAndRepeatData(props.deals, props.iterations);
});

/**
 * 存储并重复数据以生成可见的交易列表
 * @param {Array} data - 原始交易数据
 * @param {Number} iterations - 重复次数
 */
function storeAndRepeatData(data, iterations) {
    let repeatedData = [];
    for (let i = 0; i < iterations; i++) {
        repeatedData = [...repeatedData, ...data];
    }
    visibleDeals.value = repeatedData;
}

/**
 * 高亮指定行
 * @param {Number} index - 行索引
 */
function highlightRow(index) {
    highlightedIndex.value = index;
    pauseScrolling();
}

// 取消高亮行
function unhighlightRow() {
    highlightedIndex.value = -1;
    resumeScrolling();
}

// 暂停表格滚动
function pauseScrolling() {
    isScrollingPaused.value = true;
    if (tableBody.value) {
        tableBody.value.style.animationPlayState = 'paused';
    }
}

// 恢复表格滚动
function resumeScrolling() {
    isScrollingPaused.value = false;
    if (tableBody.value) {
        tableBody.value.style.animationPlayState = 'running';
    }
}

// 导航到交易详情页面
function navigateToDeal() {
    window.location.href = `https://www.cnhnb.com/supply/`;
}
</script>

<style scoped>
.div-box {
    /* border: 3px solid #000000; */
    width: 100%;
    height: 100%;
    display: flex;
    /* flex-wrap: wrap; */
    flex-direction: column;
    justify-content: center;
    /* box-shadow: 1px 1px 3px 1px #ccc; */
}

.box-header {
    width: 100%;
    height: 60px;
    /* color: #999; */
    font-size: 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #fff;
    padding: 0 20px;
}

.table-box {
    min-height: 50px;
    max-height: 100%;
    width: 100%;
    overflow-y: hidden; /* 启用垂直滚动条 */
    position: relative; /* 确保内部的position: sticky可以正常工作 */
    border: none;
    /* display: flex; */
    /* flex-direction: column; */
}

.latest-deals {
    font-family: Arial, sans-serif;
    font-size: 12px;
    max-width: 40%;
    /* margin: 0 auto; */
    display: flex;
    flex-wrap: wrap;
}

table {
    width: 100%;
    border-collapse: collapse;
    border-spacing: 0;
    border: none;
}

.thead-header {
    /* display:flex ; */
    height: 50px;
    width: 100%;
    z-index: 1;
    /* padding: 0 20px; */
    position: sticky; /* 固定表头 */
    top: 0; /* 表头与顶部的距离 */
    background-color: #fff;
}

th,
td {
    padding: 7px;
    text-align: left;
}

th {
    font-weight: bold;
    text-align: center;
}

td {
    text-align: center;
}

.scrolling-table-body {
    position: relative;
    will-change: transform;
    animation: scrollUp 2000s linear infinite; /* 20 秒完成一次循环 */
}

/* 添加 CSS 动画 */
@keyframes scrollUp {
    0% {
        transform: translateY(0%);
    }
    100% {
        transform: translateY(-100%);
    }
}

.magnify {
    color: #63b555;
}

/* 确保放大后的行不会覆盖其他行 */
tr.magnify td {
    position: relative;
}
</style>
