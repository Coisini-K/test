<!-- 首页个人信息模块 -->

<!--
<UserInformation
	:userInfo="{
		avatar: '/src/assets/images/mine/doge.jpg',
		name: 'oh my rain',
		}"
	/>
-->

<template>
  <div class="user-card">
    <div class="use-container">
      <div class="avatar-container">
        <img :src="user.avatar" :alt="user.name" class="avatar-img" />
        <h2 class="avatar-name">{{ user.name }}</h2>
      </div>
      <!-- <div class="info-container-false">
				<button class="edit-button">Edit Profile</button>
				<button class="settings-button">Settings</button>
			</div> -->
      <div class="info-container-true">
        <ServiceText text="服务" />
      </div>
    </div>
    <div class="info-icon-item">
      <div class="icon-item">
        <font-awesome-icon :icon="['fas', 'list']" class="font-icon" />
        <p>我的订单</p>
      </div>
      <div class="icon-item">
        <font-awesome-icon :icon="['fas', 'comments']" class="font-icon" />
        <p>我的评价</p>
      </div>
      <div class="icon-item">
        <font-awesome-icon :icon="['fas', 'address-card']" class="font-icon" />
        <p>个人名片</p>
      </div>
      <div class="icon-item">
        <font-awesome-icon :icon="['fas', 'star']" class="font-icon" />
        <p>我的收藏</p>
      </div>
    </div>
    <ServiceText text="热销中!" />
    <div class="info-container-ul">
      <LatestDeals :deals="deals" />
    </div>
  </div>
</template>

<script setup>
// 文本分割
import ServiceText from '@/components/ServiceText.vue';
// 列表滚动
import LatestDeals from '@/components/LatestDeals.vue';

// 如果需要从外部接收用户信息，可以通过 props 传递
const props = defineProps({
  userInfo: {
    type: Object,
    required: false,
    default() {
      return {
        avatar: '/src/assets/images/mine/doge.jpg',
        name: '・ࡇ・',
        // email: 'john.doe@example.com',
        // bio: 'A software engineer with a passion for technology and innovation.',
      };
    },
  },
});

// 示例用户信息
const user = props.userInfo;
// const user = {
// name: 'QAQ',
// avatar: '/src/assets/images/mine/doge.jpg',
// bio: 'A software engineer with a passion for technology and innovation.',
// email: 'john.doe@example.com',
// }

if (props.userInfo) {
  user.avatar = props.userInfo.avatar;
  user.name = props.userInfo.name;
  // user.email = props.userInfo.email
  // user.bio = props.userInfo.bio
}

// 定义滚动列表内容
const areas = [
  '(红河)h老板 已卖出10斤干菜',
  '(亳州)黄老板 已卖出100斤白术苗',
  '(郑州)h老板 已卖出3袋生菜种子',
  '(宿州)吉老板 已卖出100斤大蒜',
  '(西安)马老板 已卖出1箱柿子',
  '(临沂)h老板 已卖出2000斤苹果',
  '(保定)宋老板 已卖出45斤羊肉',
  '(保定)宋老板 已卖出45斤羊肉',
  '(郑州)胥老板 已卖出1瓶杀虫剂',
  '(保定)宋老板 已卖出45斤羊肉',
  '(眉山)广老板 已卖出1箱李子',
  '(亳州)黄老板 已卖出100斤白术苗',
  '(眉山)广老板 已卖出1箱李子',
  '(眉山)广老板 已卖出1箱李子',
  '(聊城)李老板 已卖出5瓶杀菌剂',
  '(咸宁)关老板 已卖出1棵桂花树',
  '(江门)h老板 已卖出40斤牛大力',
  '(宿州)h老板 已卖出500株辣椒苗',
  '(荆门)h老板 已卖出1箱鸡蛋',
  '(江门)h老板 已卖出40斤土茯苓',
  '(聊城)广老板 已卖出1箱圣女果',
  '(聊城)湖老板 已卖出1箱甜瓜',
  '(南充)陈老板 已卖出2000颗夏枯草',
  '(巴中)陈老板 已卖出1000颗夏枯草',
  '(邵阳)安老板 已卖出1包大蒜种子',
  '(长沙)李老板 已卖出50棵柿树苗',
  '(宿州)h老板 已卖出500株辣椒苗',
  '(泰安)广老板 已卖出1箱苹果',
  '(钦州)吴老板 已卖出10棵枇杷树苗',
  '(郑州)张老板 已卖出400斤牛副产品',
  '(红河)h老板 已卖出10斤干菜',
  '(亳州)黄老板 已卖出100斤白术苗',
  '(郑州)h老板 已卖出3袋生菜种子',
  '(宿州)吉老板 已卖出100斤大蒜',
  '(西安)马老板 已卖出1箱柿子',
  '(临沂)h老板 已卖出2000斤苹果',
  '(保定)宋老板 已卖出45斤羊肉',
  '(保定)宋老板 已卖出45斤羊肉',
  '(郑州)胥老板 已卖出1瓶杀虫剂',
  '(保定)宋老板 已卖出45斤羊肉',
  '(眉山)广老板 已卖出1箱李子',
  '(亳州)黄老板 已卖出100斤白术苗',
  '(眉山)广老板 已卖出1箱李子',
  '(眉山)广老板 已卖出1箱李子',
  '(聊城)李老板 已卖出5瓶杀菌剂',
  '(咸宁)关老板 已卖出1棵桂花树',
  '(江门)h老板 已卖出40斤牛大力',
  '(宿州)h老板 已卖出500株辣椒苗',
  '(荆门)h老板 已卖出1箱鸡蛋',
  '(江门)h老板 已卖出40斤土茯苓',
  '(聊城)广老板 已卖出1箱圣女果',
  '(聊城)湖老板 已卖出1箱甜瓜',
  '(南充)陈老板 已卖出2000颗夏枯草',
  '(巴中)陈老板 已卖出1000颗夏枯草',
  '(邵阳)安老板 已卖出1包大蒜种子',
  '(长沙)李老板 已卖出50棵柿树苗',
  '(宿州)h老板 已卖出500株辣椒苗',
  '(泰安)广老板 已卖出1箱苹果',
  '(钦州)吴老板 已卖出10棵枇杷树苗',
  '(郑州)张老板 已卖出400斤牛副产品',
];
// 生成只包含 area 属性的对象数组
const deals = areas.map((area) => ({
  area: area, // 使用 areas 数组中的值
}));
</script>

<style scoped>
.user-card {
  width: 300px;
  height: 560px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  /* padding: 1rem; */
  background-color: #fff;
  box-shadow: 1px 1px 3px 1px #ccc;
}

.use-container {
  margin-top: 20px;
  width: 100%;
  height: 120px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}

.avatar-container {
  padding: 0 30px;
  margin-bottom: 10px;
  width: 100%;
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.avatar-img {
  width: 72px;
  height: 72px;
  object-fit: cover;
  border-radius: 32%; /* 设置为圆形 */
  margin-right: 20px;
}

.avatar-name {
  flex: 1;
  font-size: 1.2rem;
  /* margin-bottom: 0.5rem; */
}

.info-container-false {
  padding: 0 30px;
  /* margin-bottom: 10px; */
  width: 100%;
  flex-grow: 1;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
}

.edit-button,
.settings-button {
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.edit-button {
  background-color: #007bff;
  color: #fff;
}

.settings-button {
  background-color: #28a745;
  color: #fff;
}

.info-icon-item {
  width: 90%;
  height: 240px;
  display: flex; /* 使用 Flexbox 布局 */
  flex-wrap: wrap; /* 允许子元素换行 */
  justify-content: center;
  /* 水平居中对齐子元素 */
  align-items: center;
  gap: 10px;
  /* 子元素之间的间隙 */
}

.icon-item {
  margin: 15px auto;
  /* flex: 1 0 calc(50% - 20px); */
  /* 每个子元素占据一半宽度减去间隙的一半 */
  min-width: calc(50% - 50px);
  /* 最小宽度也是占据一半宽度减去间隙的一半 */
  height: 85px;
  /* 固定高度 */
  display: flex;
  /* 子元素内部使用 Flexbox 布局 */
  flex-direction: column;
  align-items: center;
  /* 垂直居中对齐 */
  justify-content: center;
  /* 水平居中对齐 */
  /* border: 1px solid #ccc; */
  /* 边框 */
  /* box-sizing: border-box; */
  /* 包含边框和内边距 */
}

.font-icon {
  width: 100%;
  /* 背景颜色 */
  color: #c1e4bd;
  font-size: 60px;
  margin-bottom: 5px;
}
.icon-item p {
  height: 20px;
  /* font-size: 16px; */
}

/* 适应小屏幕设备 */
@media (max-width: 600px) {
  .font-icon {
    flex: 1 0 calc(100% - 10px); /* 在小屏幕上每个子元素占据整行 */
    min-width: calc(100% - 10px); /* 最小宽度也是占据整行 */
  }
}

.info-container-ul {
  height: 100px;
  /* width: 100%; */
  /* display: flex; */
  /* flex-direction: column; */
  /* align-items: center; */
  /* justify-content: center;	 */
  /* text-align: center; */
  /* border: 1px solid #ccc;	 */
}
</style>
