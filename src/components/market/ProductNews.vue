<template>
    <div class="news-container">
        <button @click="toggleContent('latest')">最新资讯</button>
        <button @click="toggleContent('hot')">热门资讯</button>
        <a href="#"> 更多&#32;&#10095; </a>

        <div v-if="activeTab === 'latest'" class="news-list">
            <!-- <h2>最新资讯</h2> -->
            <ul>
                <li v-for="(news, index) in latestNews" :key="index">
                    {{ news.title }}
                </li>
            </ul>
        </div>

        <div v-if="activeTab === 'hot'" class="news-list">
            <!-- <h2>热门资讯</h2> -->
            <ul>
                <li v-for="(news, index) in hotNews" :key="index">
                    {{ news.title }}
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

// 定义响应式变量
const activeTab = ref('latest'); // 默认显示最新资讯

// 最新资讯数据
const latestNews = ref([
    { title: '橙子几月成熟季节？' },
    { title: '种一亩丝瓜能赚多少钱？' },
    { title: '蔬菜种植技术分享' },
]);

// 热门资讯数据
const hotNews = ref([
    { title: '全国大闸蟹排名前10' },
    { title: '生姜的产量一亩地多少斤？' },
    { title: '农产品市场行情分析' },
]);

// 切换内容的方法
const toggleContent = (tabName) => {
    activeTab.value = tabName;
};
</script>

<style scoped>
.news-container {
    width: 100%;
    /* margin: 20px; */
    /* padding: 20px; */
    background-color: #f5f5f5;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

a {
    font-size: 1rem;
}

a:hover {
    color: #8ff6a6;
    background-color: transparent;
    /* 悬停颜色 */
}

button {
    font-size: 1rem;
    margin-right: 10px;
    padding: 10px 20px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

button:hover {
    background-color: #0056b3;
}

.news-list {
    width: 100%;
    padding: 10px;
}

h2 {
    font-size: 20px;
    color: #333;
    margin-top: 20px;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    font-size: 18px;
    color: #555;
    margin: 10px 0;
}
</style>
