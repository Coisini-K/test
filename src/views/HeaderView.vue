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
        <div class="main_main">
          <div class="main_main_left">
            <div class="main_input">
              <SearchBox />
            </div>
            <div class="main_main_ul" v-if="isSticky">
              <ul>
                <li>苹果</li>
                <li>柑橘</li>
                <li>鸡</li>
                <li>牛副产品</li>
                <li>红薯</li>
                <li>猪副产品</li>
                <li>鸡蛋</li>
                <li>牛肉</li>
              </ul>
            </div>
          </div>

          <div class="main_main_right">
            <p>免费开店卖货</p>
          </div>
        </div>

        <div class="main_right" :class="{ top_right: !isSticky }">
          <div class="main_right_img">
            <img src="@/assets/images/header/QR.png" alt="no!" />
          </div>

          <div class="main_right_txt">
            <div>下载惠农网APP</div>
            <div>手机询价，沟通更方便</div>
          </div>
        </div>
      </div>
      <div class="bar">
        <NavigationRouter />
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue';
import NavigationRouter from '@/components/NavigationRouter.vue';
import SearchBox from '@/components/SearchBox.vue';

const isSticky = ref(true);

const handleScroll = () => {
  if (window.scrollY > 320) {
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
*{
  transition: none;
}
.header {
  height: 320px;
  width: 100%;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  /* border: 1px solid #fff; */
  box-shadow: 1px 1px 3px 1px #ccc;
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
  justify-content: space-between;
  /* border: 1px solid #ccc; */
}

.main_left {
  /* width: 320px; */
  /* height: 80%; */
  /* border: 1px solid #ff0000; */
  padding: 5px 0;
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

.main_main {
  width: 720px;
  /* height: 200px; */
  /* border: 1px solid #ff0000; */
  display: flex;
  align-items: flex-start;
  justify-content: space-evenly;
}

.main_main_left {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  /* border: 1px solid #ff0000; */
}

.main_input {
  width: 520px;
  height: 52px;
  /* border: 1px solid #000000; */
}

.main_main_ul {
  width: 100%;
  height: 40px;
  font-size: 0.8rem;
}

.main_main_ul ul {
  width: 100%;
  height: 100%;
  list-style-type: none;
  /* 取消列表项符号 */
  padding: 0;
  /* 可选：移除默认的内边距 */
  margin: 0;
  /* 可选：移除默认的外边距 */
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
}

.main_main_ul li {
  margin: 0 5px;
}

.main_main_right {
  width: 100px;
  height: 52px;
  /* padding-bottom: auto; */
  /* display: flex; */
  /* align-items: center; */
  /* justify-content: flex-start; */
  /* flex-direction: row; */
}

.main_main_right p {
  width: 100%;
  height: 100%;
  font-size: 0.9rem;
  color: white;
  /* padding-bottom: auto; */
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 7px;
  background-color: #ff862c;
}

.main_right {
  width: 120px;
  height: 160px;
}

.main_right_img {
  width: 120px;
  height: 120px;
}

.main_right_txt {
  font-size: 0.7rem;
  text-align: center;
}

.main_left_img_max img,
.main_left_img_min img,
.main_right_img img {
  width: 100%;
  height: 100%;
  /* border: 1px solid #000000; */
}

.top {
  height: 72px;
  width: 100%;
  /* margin:0; */
  /* padding:0; */
  position: fixed;
  top: 0;
  left: 0;
  background-color: #fff;
  /* border: 1px solid #ccc; */
    box-shadow: 1px 1px 3px 1px #ccc;
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.top_right {
  width: 180px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.top_right .main_right_img {
  width: 52px;
  height: 52px;
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
