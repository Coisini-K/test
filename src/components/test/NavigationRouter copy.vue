<!-- 路由导航栏 -->

<template>
    <div class="navbar">
        <nav>
            <RouterLink v-for="link in links" :key="link.href" :to="link.href" class="nav-link">
                {{ link.text }}
            </RouterLink>
        </nav>
    </div>
    <!-- <RouterView /> -->
</template>

<script setup>
import { RouterLink } from 'vue-router';

const links = [
    { href: '/test1', text: '测试1' },
    { href: '/test2', text: '测试2' },
    { href: '/', text: '首页' },
    { href: '/supply', text: '供应大厅' },
    { href: '/procurement', text: '采购大厅' },
    { href: '/market', text: '行情大厅' },
    { href: '/bigdata', text: '惠农大数据' },
    { href: '/news', text: '行业资讯' },
    { href: '/mall', text: '严选商城' },
    { href: '/npt', text: '农批通' },
    { href: '/tuliu', text: '土流网' }
];

// import { ref, onMounted, watch, nextTick } from 'vue';
// import { RouterLink, useRoute } from 'vue-router';
// import useMainStore from '@/stores';
// const mainStore = useMainStore();

// 定义一个引用，用于获取导航栏元素
// const navbarRef = ref(null);

/**
 * 判断当前路由是否匹配指定路径
 * @param {string} path - 需要判断的路径
 * @returns {boolean} - 当前路由是否匹配指定路径
 */

// 获取第一个导航链接
// const firstGroup = () => {
//     const firstLink = navbarRef.value.querySelector('.nav-link');
//     if (firstLink) {
//         // 为第一个链接添加 active 类
//         firstLink.classList.add('active');
//     }
// };
// 在组件挂载时，默认激活第一个链接
// onMounted(() => {
//     firstGroup();
// });

// 获取当前路由对象
// const route = useRoute();
/**
 * 第一种添加active类的方法
 * vue3语法，根据条件动态地动态绑定类名
 */
// <RouterLink RouterLink to="/test1" class="nav-link" : class="{ active: isActive('/test1') }" > 测试1</RouterLink>
// const isActive = (path) => {
//     return route.path === path;
// };

/**
 * 第二种添加active类的方法
 * 监听路由变化，更新活动链接
 */
/*
// 默认清除左侧电梯导航栏
const clearBar = () => {
    mainStore.clearBar();
};
watch(route, async () => {
    try {
        // console.log("route", route);
        clearBar();
        // 获取所有导航链接
        const links = navbarRef.value.querySelectorAll('.nav-link');
        console.log("links", links);
        links.forEach((link) => {
            console.log("link", link);
            // 移除所有链接的 active 类
            link.classList.remove('active');
        });
        // console.log("navbarRef.value", navbarRef.value);
        // 根据当前路由路径查找对应的活动链接
        const activeLink = navbarRef.value.querySelector(
            `.nav-link[href="${route.path}"]`
        );
        // console.log("route.path", route.path);
        console.log("activeLink", activeLink);
        if (activeLink) {
            // 为活动链接添加 active 类
            await nextTick();
            activeLink.classList.add('active');
        } else {
            // firstGroup();
        }
    } catch (error) {
        console.error("Error updating active link:", error);
    }
});
 */
</script>

<style scoped>
.navbar {
    width: 100%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: flex-start;
}

nav {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    /* padding: 10px 0; */
}

.nav-link {
    color: #555;
    padding: 8px 12px;
    margin: 0 8px;
    font-size: 1.2rem;
    font-weight: bold;
    border-radius: 7px;
}

.router-link-active {
    color: #38bf3e;
}

/* .nav-link.active {
    color: #38bf3e;
} */

.nav-link:hover {
    color: #38bf3e;
}
</style>
