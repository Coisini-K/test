<template>
  <div class="new-supplies">
    <h2>新供应·{{ vegetables[6]?.name || '蔬菜分类' }}</h2>
    <ul>
      <li v-for="(supply, index) in supplies" :key="index" class="supply-item" @click="navigateToPage(supply.url)">
        <span class="name">
          <p class="name-num1">{{ supply.name || '商品名称' }}</p>
          <p class="name-num2">{{ supply.price || '价格' }}/{{ supply.unit || '单位' }}</p>
        </span>
      </li>
    </ul>
  </div>
</template>

<script setup>

const props = defineProps({
  supplies: {
    type: Array,
    default: () => []
  },
  vegetables: {
    type: Array,
    default: () => []
  }
});

function navigateToPage(url) {
  if (url) {
    window.location.href = url;
  } else {
    window.location.href = 'https://www.cnhnb.com/supply/';
  }
}
</script>

<style scoped>
.new-supplies {
  width: 39.6%;
  height: 300px;
  display: flex;
  flex-direction: column;
  margin: 70px 0 0 1px;
  /* align-items: center; */
  background-color: #ffffff;
  /* border: 1px solid silver ; */
  box-shadow: 2px 2px 5px 0 rgba(0, 0, 0, 0.2);
}

.new-supplies h2 {
  font-size: 1.2em;
  font-weight: bold;
  margin:  5px ;
}
.new-supplies ul {
  padding: 0 30px;
}

.supply-item {
  width: 100%;
  margin-bottom: 10px;
  cursor: pointer;
  /* 改变鼠标指针形状 */
  transition: color 0.3s ease;
  /* 平滑过渡 */
}

.supply-item .name {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.9em;
}

.name-num1 {
  width: 70%;
  overflow: hidden;
  /* 隐藏超出的内容 */
  text-overflow: ellipsis;
  /* 使用省略标记(...)来代替被修剪的文本 */
  white-space: nowrap;
  /* 不换行 */
}

.name-num2 {
  width: 30%;
  text-align: right;
  color: red;
}

.name:hover {
  color: #63b555;
  /* 鼠标悬停时改变字体颜色*/
}
</style>