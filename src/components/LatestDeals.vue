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
	title="true"
	info="最新成交"
	date="2024-10-19"
	iterations="100"
/>
-->
<template>
  <div class="div-box">
    <div class="box-header" v-if="info || date">
      <p v-if="info">{{ info }}</p>
      <p v-if="date">{{ date }}</p>
    </div>
    <div class="table-box">
      <table>
        <thead class="thead-header" v-if="title">
          <tr>
            <th>地区</th>
            <th>卖家名称</th>
            <th>出售品类</th>
          </tr>
        </thead>
        <tbody class="scrolling-table-body" ref="tableBody">
          <tr
            v-for="(deal, index) in visibleDeals"
            :key="index"
            :class="{ magnify: highlightedIndex === index }"
            @mouseover="highlightRow(index)"
            @mouseleave="unhighlightRow()"
            @click="navigateToDeal(deal)"
          >
            <td class="magnify-main" v-if="deal.area">{{ deal.area }}</td>
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

const props = defineProps({
  deals: { type: Array, required: true },
  title: { type: Boolean, default: false },
  info: { type: String, default: '' },
  date: { type: String, default: '' },
  iterations: { type: Number, default: 40 },
});

const visibleDeals = ref([]);
const highlightedIndex = ref(-1);
const isScrollingPaused = ref(false);
const tableBody = ref(null);

onMounted(() => {
  storeAndRepeatData(props.deals, props.iterations);
});

function storeAndRepeatData(data, iterations) {
  let repeatedData = [];
  for (let i = 0; i < iterations; i++) {
    repeatedData = [...repeatedData, ...data];
  }
  visibleDeals.value = repeatedData;
}

function highlightRow(index) {
  highlightedIndex.value = index;
  pauseScrolling();
}

function unhighlightRow() {
  highlightedIndex.value = -1;
  resumeScrolling();
}

function pauseScrolling() {
  isScrollingPaused.value = true;
  if (tableBody.value) {
    tableBody.value.style.animationPlayState = 'paused';
  }
}

function resumeScrolling() {
  isScrollingPaused.value = false;
  if (tableBody.value) {
    tableBody.value.style.animationPlayState = 'running';
  }
}

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
  /* background-color: #ffffff; */
}

.box-header {
  width: 100%;
  height: 60px;
  z-index: 20;
  /* color: #999; */
  font-size: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #ffffff;
  padding: 0 20px;
  /* background-color: #63b555; */
}

.table-box {
  min-height: 50px;
  max-height: 100%;
  width: 100%;
  z-index: 20;
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
  background-color: #ffffff;
  /* border: 1px solid #000000; */
  border: none;
}

.thead-header {
  /* display:flex ; */
  height: 50px;
  width: 100%;
  z-index: 20;
  /* padding: 0 20px; */
  position: sticky; /* 固定表头 */
  top: 0; /* 表头与顶部的距离 */
  background-color: #ffffff;
}

th,
td {
  padding: 7px;
  text-align: left;
}

th {
  /* background-color: #f2f2f2; */
  font-weight: bold;
  text-align: center;
}

td {
  text-align: center;
}

.scrolling-table-body {
  position: relative;
  will-change: transform;
  transition: transform 0.5s ease-in-out;
  animation: scrollUp 2000s linear infinite; /* 30 秒完成一次循环 */
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
  z-index: 10;
  background-color: #f8f8f8;
  color: #63b555;
}

/* 确保放大后的行不会覆盖其他行 */
tr.magnify td {
  position: relative;
  z-index: 10;
}

.magnify-main {
  z-index: 10;
}
</style>
