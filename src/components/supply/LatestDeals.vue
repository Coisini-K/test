<!-- 成交数据预览 -->

<template>
  <div class="div-box">
    <div class="box-header">
      <h2>{{ title }}</h2>
      <p class="date">{{ date }}</p>
    </div>
    <div class="table-box">
      <table>
        <thead class="thead-header">
          <tr>
            <th>地区</th>
            <th>卖家名称</th>
            <th class="thead-header-th">出售品类</th>
          </tr>
        </thead>
        <tbody class="scrolling-table-body" ref="tableBody">
          <tr
            v-for="(deal, index) in visibleDeals"
            :key="index"
            @mouseover="highlightRow(index)"
            @mouseleave="unhighlightRow(index)"
            :class="{ magnify: highlightedIndex === index }"
            @click="navigateToDeal(deal)"
          >
            <td class="magnify-main">{{ deal.area }}</td>
            <td class="magnify-main">{{ deal.sellerName }}</td>
            <td class="magnify-main magnify-main-box">
              {{ deal.productType }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LatestDeals',
  props: {
    deals: { type: Array, required: true },
    title: { type: String, default: '最新成交' },
    date: { type: String, default: '2024-10-19' },
    iterations: { type: Number, default: 100 },
  },
  data() {
    return {
      visibleDeals: [],
      highlightedIndex: -1,
      isScrollingPaused: false,
    };
  },
  mounted() {
    this.storeAndRepeatData(this.deals, this.iterations);
  },
  methods: {
    storeAndRepeatData(data, iterations) {
      let repeatedData = [];
      for (let i = 0; i < iterations; i++) {
        repeatedData = repeatedData.concat(data);
      }
      this.visibleDeals = repeatedData;
    },
    highlightRow(index) {
      this.highlightedIndex = index;
      this.pauseScrolling();
    },
    unhighlightRow() {
      this.highlightedIndex = -1;
      this.resumeScrolling();
    },
    pauseScrolling() {
      this.isScrollingPaused = true;
      const tableBody = this.$refs.tableBody;
      tableBody.style.animationPlayState = 'paused';
    },
    resumeScrolling() {
      this.isScrollingPaused = false;
      const tableBody = this.$refs.tableBody;
      tableBody.style.animationPlayState = 'running';
    },
    navigateToDeal() {
      // 在这里定义要跳转到的URL一个详情页的路由
      //  window.location.href = `/details/${deal.id}`
      // 或者如果你使用的是Vue Router
      // this.$router.push({ name: 'Details', params: { id: deal.id } })
      //多个不同网页跳转
      // getItemUrl(item) {
      // const urls = {
      //   '韭菜': 'https://example.com/chives',
      //   '蒜苗': 'https://example.com/garlic_sprouts',
      // };
      // return urls[item] || '#'; // 如果没有找到URL，则返回#或任何默认值
      // },
      window.location.href = `https://www.cnhnb.com/supply/`;
    },
  },
};
</script>

<style>
.div-box {
  /* border: 3px solid #000000; */
  width: 40%;
  height: 300px;
  display: flex;
  /* flex-wrap: wrap; */
  flex-direction: column;
  background-color: #ffffff;
  /* margin-right: 10px; */
  /* border: 1px solid silver ; */
  /* 水平偏移，垂直偏移，模糊半径，扩展半径，颜色 */
  box-shadow: 2px 2px 5px 0 rgba(0, 0, 0, 0.2);
}

.box-header {
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  /* padding: 10px 0; */
  /* background-color: #63b555; */
}

.table-box {
  height: 300px;
  width: 100%;
  z-index: 100;
  overflow-y: hidden; /* 启用垂直滚动条 */
  position: relative; /* 确保内部的position: sticky可以正常工作 */
  border: none;
}

.latest-deals {
  font-family: Arial, sans-serif;
  font-size: 12px;
  max-width: 40%;
  /* margin: 0 auto; */
  display: flex;
  flex-wrap: wrap;
}

h2 {
  width: 80%;
  margin-left: 10px;
  font-weight: bold;
}

.date {
  width: 20%;
  /* margin-right: 0%; */
  font-size: 14px;
  color: #999;
  margin-right: 10px;
  text-align: right;
}

table {
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  /* border: 1px solid #000000; */
  border: none;
}

.thead-header {
  z-index: 100;
  position: sticky; /* 固定表头 */
  top: 0; /* 表头与顶部的距离 */
  background-color: #ffffff;
  /* margin-left: 150px; */
}

th {
  padding: 10px;
  text-align: left;
  font-weight: 530;
}
.thead-header-th {
  text-align: right;
}
td {
  padding: 10px;
}
.magnify-main-box {
  /* background-color: #f2f2f2; */
  text-align: right;
}

.scrolling-table-body {
  position: relative;
  will-change: transform;
  transition: transform 0.5s ease-in-out;
  animation: scrollUp 2000s linear infinite; /* 30 秒完成一次循环 */
  font-size: 0.8em;
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
  z-index: 1;
  background-color: #f8f8f8;
  color: #63b555;
}

/* 确保放大后的行不会覆盖其他行 */
tr.magnify td {
  position: relative;
  z-index: 1;
}

.magnify-main {
  z-index: 1;
}
</style>
