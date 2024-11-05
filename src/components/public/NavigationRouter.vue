<!-- 路由导航栏 -->

<template>
    <div class="navbar">
        <nav>
            <RouterLink
                v-for="link in links"
                :key="link.href"
                :to="link.href"
                class="nav-link"
            >
                {{ link.text }}
            </RouterLink>
        </nav>
    </div>
</template>

<script setup>
import { RouterLink } from 'vue-router';

const links = [
    // { href: '/test1', text: '测试1' },
    // { href: '/test2', text: '测试2' },
    { href: '/', text: '首页' },
    { href: '/supply', text: '供应大厅' },
    { href: '/market', text: '行情大厅' },
    { href: '/procurement', text: '采购大厅' },
    { href: '/bigdata', text: '惠农大数据' },
    { href: '/news', text: '行业资讯' },
    { href: '/mall', text: '严选商城' },
    { href: '/npt', text: '农批通' },
    { href: '/tuliu', text: '土流网' },
];
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

.nav-link:hover {
    color: #38bf3e;
}
</style>
