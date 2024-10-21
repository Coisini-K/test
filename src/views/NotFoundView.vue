<template>
  <div class="not-found">
    <h1>404 - 页面未找到</h1>
    <p>您访问的页面不存在。</p>
    <RouterLink to="/">返回首页</RouterLink>
  </div>
</template>

<script setup>
import { RouterLink } from "vue-router";
</script>

<style scoped>
.not-found {
  text-align: center;
  margin-top: 50px;
}

h1 {
  font-size: 2em;
  color: #ff4d4d;
}

p {
  font-size: 1.2em;
  color: #666;
}

a {
  display: inline-block;
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  text-decoration: none;
  border-radius: 5px;
}

a:hover {
  background-color: #0056b3;
}
</style>
