<template>
  <!-- <div class="home_box"> -->
  <div class="home_overview">
    <CategoryList />
    <div class="home_overview_show">
      <CarouselModule :slides="photos" :interval="3000" />
      <div class="home_overview_show_imgs">
        <img src="@/assets/images/home/carousel/4.jpg" alt="no!" />
        <img src="@/assets/images/home/carousel/2.jpg" alt="no!" />
      </div>
    </div>
    <UserInformation
      :userInfo="{
        avatar: '/src/assets/images/home/doge.jpg',
        name: 'oh my rain',
      }"
    />
  </div>
  <div class="home_supply">
    <NavigationBar />
    <div class="home_supply_show">
      <RecommendedProducts
        :products="products"
        :title="false"
        width="222px"
        height="300px"
      />
      <RecommendedProducts
        :products="products"
        :title="false"
        :width="width"
        :height="height"
      />
    </div>
  </div>
  <!-- </div> -->
</template>

<script setup>
import CategoryList from '@/components/home/CategoryList.vue';
import CarouselModule from '@/components/CarouselModule.vue';
import UserInformation from '@/components/home/UserInformation.vue';
import NavigationBar from '@/components/NavigationBar.vue';
import RecommendedProducts from '@/components/RecommendedProducts.vue';

import { onMounted } from 'vue';
import useMainStore from '@/stores';

const width = '222px';
const height = '300px';

const mainStore = useMainStore();
const initBar = () => {
  mainStore.setBar([
    { name: '你好', target: '#hello', isActive: true },
    { name: '信息', target: '#hell', isActive: false },
    { name: '关于', target: '#heo', isActive: false },
  ]);
};

onMounted(() => {
  initBar();
  // console.log("bar:", mainStore.bar);
});

const photos = [
  '/src/assets/images/home/carousel/1.jpg',
  '/src/assets/images/home/carousel/3.jpg',
  '/src/assets/images/home/carousel/6.jpg',
];

const products = [
  {
    image: new URL('@/assets/images/aos/1.webp', import.meta.url).href,
    title: '广西/云南黄金水果玉米新鲜发货3/5/9斤一件代发包邮批发',
    price: '16.80',
    unit: '箱',
    description: '成交8.3万元',
  },
  {
    image: new URL('@/assets/images/aos/2.webp', import.meta.url).href,
    title: '北虫草 【500g大孢子头】虫草虫草花金虫草蛹虫草干货泡茶',
    price: '4.60',
    unit: '包',
    description: '成交45元',
  },
  {
    image: new URL('@/assets/images/aos/1.webp', import.meta.url).href,
    title: '古田丑耳3朵试吃装',
    price: '11.90',
    unit: '包',
    description: '成交8.3万元',
  },
  {
    image: new URL('@/assets/images/aos/2.webp', import.meta.url).href,
    title: '黑木耳 富贵干货大礼包B款，年货送礼高档礼盒装',
    price: '59.00',
    unit: '袋',
    description: '成交45元',
  },
  {
    image: new URL('@/assets/images/aos/1.webp', import.meta.url).href,
    title: '福建古田银耳现摘现发古田白木耳易糯多胶，1朵100G左右',
    price: '3.00',
    unit: '朵',
    description: '成交8.3万元',
  },
];
</script>

<style scoped>
/* .home_box {
  width: 1200px;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
} */
.home_overview {
  /* margin: 10px; */
  width: 100%;
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: center;
}

.home_overview_show {
  width: 600px;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  margin: 0 15px;
}

.home_overview_show_imgs {
  width: 100%;
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: space-between;
}
.home_overview_show_imgs img {
  width: 48%;
  height: 200px;
  /* margin: auto; */
}

.home_supply {
  width: 100%;
  height: 720px;
  /* margin: 10px 0; */
  border: 1px solid #ccc;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 10px;
}
.home_supply_show {
  height: 660px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  /* gap: 10px; */
}
</style>
