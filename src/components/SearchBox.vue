<template>
  <div class="search-box">
    <select class="category-select">
      <option value="supply">供应</option>
      <!-- 可以添加更多选项 -->
    </select>
    <input
      type="text"
      placeholder="请输入您要的货品"
      class="search-input"
      v-model="queryText"
      @keyup.enter="performSearch"
    />
    <button class="search-button" @click="performSearch">搜索</button>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const queryText = ref('');

function performSearch() {
  console.log('Perform search:', queryText.value);
  // 在这里你可以调用 API 或执行其他搜索相关的操作
}
</script>

<style scoped>
.search-box {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  border: 1px solid #39bf3e;
  border-radius: 7px;
  overflow: hidden;
}

.category-select {
  width: 66px;
  height: 100%;
  border: none;
  outline: none;
  background: transparent;
  cursor: pointer;
  padding-left: 10px;
}

.search-input {
  flex: 1;
  height: 100%;
  border: none;
  outline: none;
  padding-left: 10px;
}

.search-button {
  width: 72px;
  height: 100%;
  background: #39bf3e;
  color: white;
  border: none;
  cursor: pointer;
}
</style>
