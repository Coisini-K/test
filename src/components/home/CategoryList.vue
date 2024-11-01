<!-- 首页商品分类文本列表 -->

<!--
	<CategoryList />
-->

<template>
  <div class="category">
    <div class="category_list">
      <h2 class="category_title">商品分类</h2>
      <div class="category_main">
        <ul>
          <li
            v-for="(item, index) in categories_1"
            :key="index"
            class="category_li"
            @mouseover="handleMouseEnter"
            @mouseleave="handleMouseLeave"
          >
            {{ item.name }}
          </li>
        </ul>
        <ul>
          <li
            v-for="(item, index) in categories_2"
            :key="index"
            class="category_li"
            @mouseover="handleMouseEnter"
            @mouseleave="handleMouseLeave"
          >
            {{ item.name }}
          </li>
        </ul>
      </div>
    </div>
    <div class="box" v-if="status">
      <SupplyUlLeft :vegetables="vegetables" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import SupplyUlLeft from '@/components/supply/SupplyUlLeft.vue';
import { vegetables } from '@/constants/supply';

const categories_1 = ref([
  { name: '水果' },
  { name: '禽畜肉蛋' },
  { name: '农副加工' },
  { name: '种子种苗' },
  { name: '农资农机' },
  { name: '日用百货' },
  { name: '包装' },
  { name: '农工服务' },
  { name: '农技服务' },
]);

const categories_2 = ref([
  { name: '蔬菜' },
  { name: '水产' },
  { name: '粮油米面' },
  { name: '苗木花草' },
  { name: '中药材' },
  { name: '土地流转' },
  { name: '农业服务' },
  { name: '租赁服务' },
  { name: '经济作物' },
]);

const status = ref(false);

const handleMouseEnter = () => {
  status.value = true;
};

const handleMouseLeave = () => {
  status.value = false;
};
</script>

<style scoped>
.category {
  width: 270px;
  height: 560px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
}
.category_list {
  width: 270px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  /* border: 1px solid #333; */
  box-shadow: 1px 1px 3px 1px #ccc;
}

.category_title {
  width: 100%;
  height: 90px;
  padding-left: 31px;
  margin-bottom: 2px;
  font-size: 1.6rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  background-color: #fff;
}

.category_main {
  width: 100%;
  /* height: 370px; */
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #fff;
}

.category_main ul {
  /* margin-right: 10px; */
  padding: 0;
  margin: auto;
  list-style-type: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* border: 1px solid #333; */
  /* text-align: left; */
}

.category_li {
  padding: 10px;
  font-size: 1.2rem;
}

.category_li:hover {
  /* font-size: 1.6rem; */
  cursor: pointer;
  color: #8ff6a6;
  border-bottom:1px solid #8ff6a6 ;
}

.box {
  position: absolute;
  margin-left: 275px;
  z-index: 100;
  width: 620px;
  height: 560px;
  background-color: #fff;
  /* box-shadow: 2px 2px 3px 1px #ccc; */
}
</style>
