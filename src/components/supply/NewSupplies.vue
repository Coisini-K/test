<template>
  <div class="new-supplies">
    <h2>新供应·蔬菜</h2>
    <ul>
      <li
        v-for="(supply, index) in supplies"
        :key="index"
        class="supply-item"
        @click="navigateToPage(supply.url)"
      >
        <span class="name">
          <p class="name-num1">{{ supply.name }}</p>
          <p class="name-num2">{{ supply.price }}/{{ supply.unit }}</p>
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['supplies'],
  methods: {
    navigateToPage() {
      // 统一跳转到指定的URL
      window.location.href = 'https://www.cnhnb.com/supply/';
    },
  },
};
</script>

<style scoped>
.new-supplies {
  width: 39.6%;
  height: 300px;
  display: flex;
  flex-direction: column;
  margin-top: 70px;
  margin-left: 1px;
  /* align-items: center; */
  background-color: #ffffff;
  /* border: 1px solid silver ; */
  box-shadow: 2px 2px 5px 0 rgba(0, 0, 0, 0.2);
}

.new-supplies h2 {
  font-size: 1.2em;
  font-weight: bold;
  margin-bottom: 10px;
}

.supply-item {
  width: 100%;
  margin-bottom: 10px;
  cursor: pointer; /* 改变鼠标指针形状 */
  transition: color 0.3s ease; /* 平滑过渡 */
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
}
.name-num2 {
  width: 30%;
}
.supply-item .name:hover {
  color: #63b555; /* 鼠标悬停时改变字体颜色 */
}
</style>
