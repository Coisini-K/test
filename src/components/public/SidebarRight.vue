<!-- 右边导航栏 -->
<template>
    <div class="sidebar">
        <nav class="sidebar-nav">
            <ul>
                <li
                    v-for="(item, index) in items"
                    :key="index"
                    @click="navigate(item)"
                >
                    <a :class="{ active: item.isActive }">{{ item.name }}</a>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script setup>
import { ref, watch, computed } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import useScrollStore from '@/stores/scroll';

const route = useRoute();
const router = useRouter();
const scrollStore = useScrollStore();

// 创建一个计算属性，依赖于 scrollStore.isSticky 用于判断页面是否吸顶
const isSticky = computed(() => {
    const sticky = scrollStore.isSticky;
    // console.log('sticky value:', sticky);
    return sticky;
});

// 导航项列表
const itemList = ref([
    { name: '顶部', isActive: true, solid: true },
    { name: '服务', isActive: false, solid: false },
    { name: '关于', isActive: false, solid: false },
    { name: '客服', isActive: false, solid: false },
    { name: '首页', isActive: false, solid: false },
]);

// 创建一个计算属性来过滤 items
const filteredItems = computed(() => {
    if (!isSticky.value) {
        return itemList.value.filter((item) => item.name !== '顶部');
    } else {
        return itemList.value;
    }
});

// 监听页面是否吸顶的变化，更新 items 的值
const items = ref(filteredItems.value);
watch(
    isSticky,
    () => {
        items.value = filteredItems.value;
        // console.log(items.value);
    },
    { immediate: true }
);

// 监听路由变化，更新 '首页' 的激活状态
watch(
    route,
    () => {
        items.value.forEach((item) => {
            if (item.name === '首页') {
                item.isActive = route.path === '/';
            }
        });
    },
    { immediate: true }
);

// 滚动到顶部
const scrollToTop = () => {
    try {
        window.scrollTo({
            top: 0,
            behavior: 'smooth', // 平滑滚动
        });
    } catch (error) {
        console.error('Failed to scroll to top:', error);
    }
};

// 跳转到首页
const navigateToHome = () => {
    router.push('/');
};

// 导航点击处理
const navigate = (item) => {
    try {
        // 设置当前项为激活状态
        if (item.solid === false) {
            items.value.forEach((i) => {
                if (i.solid === false) {
                    i.isActive = i === item;
                }
            });
        }

        // 根据导航项的名称进行不同的操作
        if (item.name === '首页') {
            navigateToHome();
        } else if (item.name === '顶部') {
            scrollToTop();
        }
    } catch (error) {
        console.error('Navigation error:', error);
    }
};
</script>

<!-- <style scoped>
.sidebar {
    position: fixed;
    top: 0;
    right: 0;
    width: 200px;
    height: 100%;
    background-color: #f8f9fa;
    padding: 20px;
    box-shadow: -1px 0 10px rgba(0, 0, 0, 0.1);
}

.sidebar-nav ul {
    list-style: none;
    padding: 0;
    margin: 0;
}

.sidebar-nav ul li {
    margin-bottom: 10px;
}

.sidebar-nav ul li a {
    text-decoration: none;
    color: #333;
    font-size: 16px;
    display: block;
    padding: 10px;
    border-radius: 5px;
    transition: background-color 0.3s;
}

.sidebar-nav ul li a.active {
    background-color: #007bff;
    color: #fff;
}
</style> -->

<style scoped>
.sidebar {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    right: 0;
    height: 100%;
    width: 66px;
    background-color: #f5f5f5;
    /* padding: 1rem; */
    z-index: 99;
}

.sidebar-nav ul {
    list-style-type: none;
    /* padding: 0; */
}

.sidebar-nav li {
    margin: 5px 0;
}

.sidebar-nav a {
    color: #333;
    display: block;
    padding: 0.4rem;
    border-radius: 7px;
}

.sidebar-nav a:hover {
    background-color: #e4f9e7;
}

.sidebar-nav a.active {
    background-color: #b3f9bd;
}
</style>
