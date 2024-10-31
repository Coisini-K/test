<template>
  <div class="recommended-products" :style="{ height: height }">
    <h2 v-if="title">好货推荐·{{ vegetables[6]?.name || '推荐分类' }}</h2>
    <div
      class="product"
      v-for="(product, index) in products"
      :key="index"
      :style="{ width: width }"
      @click="navigateToHome"
    >
      <img
        :src="product.image || '/path/to/default-image.jpg'"
        alt="Product Image"
      />
      <div class="product-info">
        <span class="price"
          >{{ product.price || '价格' }}元/{{ product.unit || '单位' }}</span
        >
        <span class="description">{{ product.description || '描述' }}</span>
        <span class="title">{{ product.title || '标题' }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { DETAIL_PATH } from '@/constants/routes';
const detailPath = ref(DETAIL_PATH);
const router = useRouter();
// @click="navigateToHome"
const navigateToHome = () => {
  // router.push({ name: 'Home' }); // 假设 'Home' 是路由的名字
  // 或者使用路径字符串
  router.push(detailPath);
};

defineProps({
  title: {
    type: Boolean,
    default: false,
  },
  width: {
    type: String,
    required: false,
    default: '195px',
  },
  height: {
    type: String,
    required: false,
    default: '360px',
  },
  products: {
    type: Array,
    required: true,
    default: () => [],
  },
  vegetables: {
    type: Array,
    required: false,
    default: () => [],
  },
});
</script>

<style scoped>
.recommended-products {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  /* margin-top: 20px; */
  width: 100%;
  /* 高度 可通过父组件传递参数设置 */
  height: 360px;
}

.recommended-products h2 {
  width: 100%;
  height: 50px;
  font-weight: bold;
  font-size: 1.3em;
  display: flex;
  align-items: center;
  /* justify-content: center; */
  /* margin-top: 20px; */
}

.product {
  /* 宽度 可通过父组件传递参数设置 */
  width: 195px;
  height: 300px;
  /* border-radius: 4px; */
  overflow: hidden;
  cursor: pointer;
  background-color: #fff;
  /* border: 1px solid #ccc; */
    box-shadow: 1px 1px 3px 1px #ccc;
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
  height: 80px;
  /* text-align: center; */
}

.title {
  width: 100%;
  height: 20px;
  overflow: hidden;
  /* 隐藏超出的内容 */
  text-overflow: ellipsis;
  /* 使用省略标记(...)来代替被修剪的文本 */
  white-space: nowrap;
  /* 不换行 */
}

.product-info .price {
  width: 95px;
  height: 50px;
  font-size: 1.2em;
  color: red;
  display: flex;
  align-items: center;
  justify-content: center;
  /* margin-right: 9px; */
}

.product-info .description {
  width: 80px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  color: darkgrey;
}
</style>
