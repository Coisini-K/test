<template>
    <div class="news-container">
        <div class="title">
            <ul class="tabs">
                <li
                    v-for="(item, index) in news"
                    :key="index"
                    @mouseover="toggleContent(item.name)"
                    :class="{ active: item.name === activeTab }"
                >
                    {{ item.name }}
                </li>
            </ul>
            <a href="#"> 更多&#32;&#10095; </a>
        </div>
        <div class="news-list">
            <ul>
                <li v-for="(item, index) in currentNewsItems" :key="index">
                    {{ item }}
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';

// 接受参数数组对象 news
const props = defineProps({
    news: {
        type: Array,
        required: true,
        default: () => [],
    },
});

// 初始化 activeTab 为 news 数组中第一个对象的 name 属性
const activeTab = ref(props.news.length > 0 ? props.news[0].name : '');

// 计算当前显示的新闻列表
const currentNewsItems = computed(() => {
    const currentNews = props.news.find(
        (item) => item.name === activeTab.value
    );
    return currentNews ? currentNews.items : [];
});

// 切换内容的方法
const toggleContent = (tabName) => {
    activeTab.value = tabName;
};

// 确保在组件挂载时 activeTab 已经初始化，并为第一个 li 添加 active 类名
onMounted(() => {
    if (props.news.length > 0) {
        activeTab.value = props.news[0].name;
    }
});
</script>

<style scoped>
.news-container {
    width: 100%;
    /* height: 360px; */
    /* max-width: 800px; */
    /* margin: 0 auto; */
    background-color: #fff;
    /* padding-bottom: 20px; */
    /* border: 1px solid #ccc; */
    /* box-shadow: 1px 1px 3px 1px #ccc; */
}

.title {
    width: 100%;
    height: 42px;
    padding-right: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #eee;
}

.tabs {
    width: auto;
    height: 100%;
    display: flex;
    list-style-type: none;
    /* padding: 0; */
    /* margin: 0; */
}

.tabs li {
    width: 100px;
    height: 100%;
    padding: 10px;
    font-size: 1rem;
    cursor: pointer;
    text-align: center;
    /* border: 1px solid #ccc; */
    /* margin-right: 5px; */
}

.tabs li.active {
    /* font-size: 1rem; */
    font-weight: bold;
    background-color: #fff;
    border-top: 3px solid #39bf3e;
    padding-top: 7.3px;
}

.more {
    background-color: #ddd;
    cursor: pointer;
}

.news-list {
    margin-top: 20px;
}

.news-list ul {
    list-style-type: disc;
    padding: 0;
}

.news-list li {
    padding: 5px 0;
    margin-left: 20px;
    border-bottom: 1px solid #eee;
}

.news-list li:last-child {
    border-bottom: none;
}

.news-list li::marker {
    color: #39bf3e;
    /* 修改圆点颜色 */
}
</style>
