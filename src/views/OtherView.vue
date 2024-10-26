<template>
  <div class="home_box">
    <div class="home_overview">
      <CategoryList />
      <div class="home_overview_show">
        <CarouselComponent :slides="photos" :interval="3000" />
        <div class="home_overview_show_imgs">
          <img src="@/assets/images/carousel/4.jpg" alt="no!" />
          <img src="@/assets/images/carousel/2.jpg" alt="no!" />
        </div>
      </div>
      <UserInformation
        :userInfo="{
          avatar: '/src/assets/images/mine/doge.jpg',
          name: 'oh my rain',
        }"
      />
    </div>
    <div class="home_supply home_main">
      <NavigationBar />
      <div class="home_supply_show">
        <img class="home_supply_img" src="@/assets/images/shop.png" alt="no!" />
        <img class="home_supply_img" src="@/assets/images/shop.png" alt="no!" />
        <img class="home_supply_img" src="@/assets/images/shop.png" alt="no!" />
        <img class="home_supply_img" src="@/assets/images/shop.png" alt="no!" />
        <img class="home_supply_img" src="@/assets/images/shop.png" alt="no!" />
        <img class="home_supply_img" src="@/assets/images/shop.png" alt="no!" />
        <img class="home_supply_img" src="@/assets/images/shop.png" alt="no!" />
        <img class="home_supply_img" src="@/assets/images/shop.png" alt="no!" />
        <img class="home_supply_img" src="@/assets/images/shop.png" alt="no!" />
        <img class="home_supply_img" src="@/assets/images/shop.png" alt="no!" />
      </div>
    </div>
    <div class="home_procurement home_main">
      <NavigationBar />
      <div class="home_supply_show">
        <img class="home_supply_img" src="@/assets/images/shop.png" alt="no!" />
        <img class="home_supply_img" src="@/assets/images/shop.png" alt="no!" />
        <img class="home_supply_img" src="@/assets/images/shop.png" alt="no!" />
        <img class="home_supply_img" src="@/assets/images/shop.png" alt="no!" />
        <img class="home_supply_img" src="@/assets/images/shop.png" alt="no!" />
        <img class="home_supply_img" src="@/assets/images/shop.png" alt="no!" />
        <img class="home_supply_img" src="@/assets/images/shop.png" alt="no!" />
        <img class="home_supply_img" src="@/assets/images/shop.png" alt="no!" />
        <img class="home_supply_img" src="@/assets/images/shop.png" alt="no!" />
        <img class="home_supply_img" src="@/assets/images/shop.png" alt="no!" />
      </div>
    </div>
    <div class="home_recommend home_main">
      <NavigationBar />
      <div class="home_supply_show">
        <img class="home_supply_img" src="@/assets/images/shop.png" alt="no!" />
        <img class="home_supply_img" src="@/assets/images/shop.png" alt="no!" />
        <img class="home_supply_img" src="@/assets/images/shop.png" alt="no!" />
        <img class="home_supply_img" src="@/assets/images/shop.png" alt="no!" />
        <img class="home_supply_img" src="@/assets/images/shop.png" alt="no!" />
        <img class="home_supply_img" src="@/assets/images/shop.png" alt="no!" />
        <img class="home_supply_img" src="@/assets/images/shop.png" alt="no!" />
        <img class="home_supply_img" src="@/assets/images/shop.png" alt="no!" />
        <img class="home_supply_img" src="@/assets/images/shop.png" alt="no!" />
        <img class="home_supply_img" src="@/assets/images/shop.png" alt="no!" />
      </div>
    </div>
  </div>
</template>

<script setup>
import CategoryList from '@/components/home/CategoryList.vue';
import CarouselComponent from '@/components/home/CarouselComponent.vue';
import UserInformation from '@/components/home/UserInformation.vue';
import NavigationBar from '@/components/NavigationBar.vue';

const photos = [
  '/src/assets/images/carousel/1.jpg',
  '/src/assets/images/carousel/3.jpg',
  '/src/assets/images/carousel/6.jpg',
];
</script>

<style scoped>
.home_box {
  width: 1200px;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
}
.home_overview {
  margin: 10px;
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

.home_main {
  width: 100%;
  height: 640px;
  margin: 10px;
  border: 1px solid #ccc;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: flex-start;
}
.home_supply_show {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}
.home_supply_img {
  width: 200px;
  height: 270px;
  margin: 10px;
}
</style>
