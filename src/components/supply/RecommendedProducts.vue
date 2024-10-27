<!--
供应页面
图片列表模块
-->

<template>
  <div class="recommended-products">
    <h2>好货推荐·{{ vegetables[6].name }}</h2>
    <div class="product" v-for="(product, index) in products" :key="index">
      <img :src="product.image" alt="Product Image" />
      <div class="product-info">
        <span class="price">{{ product.price }}元/{{ product.unit }}</span>
        <span class="description">{{ product.description }}</span>
        <span class="title">{{ product.title }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    products: {
      type: Array,
      required: true,
    },
    vegetables: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
.recommended-products {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-top: 20px;
  width: 100%;
  height: 350px;
  /* background-color: rgb(255, 255, 255); */
}
.recommended-products h2 {
  width: 100%;
  height: 50px;
  font-weight: bold;
  font-size: 1.3em;
}
.product {
  width: 16.5%;
  height: 300px;
  /* box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1); */
  /* border-radius: 4px; */
  overflow: hidden;
  cursor: pointer;
  background-color: rgb(255, 255, 255);
  box-shadow: 2px 2px 5px 0 rgba(0, 0, 0, 0.2);
}

.product img {
  padding: 10px 10px 0 10px;
  width: 100%;
  height: 200px;
}

.product .product-info {
  display: flex;
  flex-wrap: wrap;

  padding: 0 10px 10px 10px;
  width: 100%;
  height: 100px;
  /* text-align: center; */
}
.title {
  width: 100%;
  height: 50px;
  overflow: hidden;
  /* 隐藏超出的内容 */
  text-overflow: ellipsis;
  /* 使用省略标记(...)来代替被修剪的文本 */
  white-space: nowrap;
  /* 不换行 */
}
.product-info .price {
  width: 55%;
  height: 50px;
  font-size: 1em;
  color: red;
  /* margin-right: 9px; */
}
.product-info .description {
  width: 45%;
  height: 50px;
  text-align: right;
  color: darkgrey;
}
</style>
