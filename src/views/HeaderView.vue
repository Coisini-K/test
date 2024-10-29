<!-- HomeView.vue -->
<template>
  <div class="header">
    <div class="header_box">
      <div class="title">
        <div class="title_left">
          <div>手机版</div>
          <div>欢迎来到惠农网！</div>
          <div>请登录</div>
          <div>免费注册</div>
        </div>
        <div class="title_right">
          <div>买家中心</div>
          <div>卖家中心</div>
        </div>
      </div>

      <div class="main" :class="{ top: !isSticky }">
        <div class="main_left">
          <div class="main_left_img_max" v-if="isSticky">
            <img src="@/assets/images/header/DMmax.png" alt="no!" />
          </div>
          <div class="main_left_img_min" v-else>
            <img src="@/assets/images/header/DMmin.png" alt="no!" />
          </div>
        </div>

        <div class="main_main"></div>

        <div class="main_right">
          <div class="main_right_img">
            <img src="@/assets/images/header/QR.png" alt="no!" />
          </div>
          <div class="main_right_txt">下载惠农网APP 手机询价，沟通更方便</div>
        </div>
      </div>
      <div class="bar">
        <NavigationBar />
      </div>
    </div>
  </div>
</template>

<script setup>
import NavigationBar from '@/components/NavigationBar.vue';
import { onMounted, onUnmounted, ref } from 'vue';

const isSticky = ref(true);

const handleScroll = () => {
  if (window.scrollY > 0) {
    isSticky.value = false;
  } else {
    isSticky.value = true;
  }
};

onMounted(() => {
  // 监听滚动事件
  window.addEventListener('scroll', handleScroll);

  // 初始化状态
  handleScroll();
});

onUnmounted(() => {
  // 移除滚动监听器
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
.header {
  height: 320px;
  width: 100%;
  max-width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  /* border: 1px solid #ccc; */
}

.header_box {
  width: 1200px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  /* border: 1px solid #ccc; */
}

.title {
  width: 100%;
  height: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  /* border: 1px solid #ccc; */
}

.title_left,
.title_right {
  height: 100%;
  font-size: 0.8rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
}

.title_left {
  width: 320px;
}

.title_right {
  width: 140px;
}

.main {
  height: 220px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  border: 1px solid #ccc;
}

.main_left {
  /* width: 320px; */
  /* height: 80%; */
  border: 1px solid #ff0000;
}

.main_left_img_max {
  width: 240px;
  height: 120px;
  /* border: 1px solid #000000; */
}

.main_left_img_min {
  width: 120px;
  height: 60%;
  /* border: 1px solid #000000; */
}

.main_right {
  width: 120px;
  height: 180px;
}

.main_right_img {
  width: 100%;
  height: 120px;
}

.main_right_txt{
  font-size: 0.8rem;
}

.main_left_img_max img,
.main_left_img_min img,
.main_right_img img {
  width: 100%;
  height: 100%;
  /* border: 1px solid #000000; */
}

.top {
  height: 60px;
  width: 100%;
  max-width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  z-index: 100;
  border: 1px solid #ccc;
}

.bar {
  width: 100%;
  height: 60px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  /* border: 1px solid #ccc; */
}
</style>
