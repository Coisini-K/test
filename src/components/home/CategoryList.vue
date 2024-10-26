<!-- use
	<CategoryList />
-->

<template>
  <div class="category_list">
    <h2 class="category_title">商品分类</h2>
    <div class="category_main">
      <ul>
        <li
          v-for="(item, index) in categories_1"
          :key="index"
          class="category_ul_1"
        >
          {{ item.name }}
        </li>
      </ul>
      <ul>
        <li
          v-for="(item, index) in categories_2"
          :key="index"
          class="category_ul_2"
        >
          {{ item.name }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CategoryList',
  data() {
    return {
      categories_1: [
        { name: '水果' },
        { name: '禽畜肉蛋' },
        { name: '农副加工' },
        { name: '种子种苗' },
        { name: '农资农机' },
        { name: '日用百货' },
        { name: '包装' },
        { name: '农工服务' },
        { name: '农技服务' },
      ],
      categories_2: [
        { name: '蔬菜' },
        { name: '水产' },
        { name: '粮油米面' },
        { name: '苗木花草' },
        { name: '中药材' },
        { name: '土地流转' },
        { name: '农业服务' },
        { name: '租赁服务' },
        { name: '经济作物' },
      ],
    };
  },
};
</script>

<style scoped>
.category_list {
  width: 270px;
  height: 560px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  /* border: 1px solid #333; */
  /* background-color: #ffffff; */
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
  background-color: #ffffff;
}

.category_main {
  width: 100%;
  /* height: 370px; */
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
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

.category_main ul li {
  margin: 10px;
  font-size: 1.2rem;
}
</style>
