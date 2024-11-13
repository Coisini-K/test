<!--
<div class="footer">
    <SectionsModule />
</div>

import SectionsModule from '@/components/public/SectionsModule.vue';

.footer{
width: 100%;
}
-->

<template>
    <div class="foot_container">
        <div v-for="(item, index) in sections" :key="index" class="section">
            <h2>{{ item.title }}</h2>
            <ul>
                <li v-for="(link, i) in item.links" :key="i">
                    <router-link :to="link.to">{{ link.text }}</router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const sections = ref([
    {
        title: '新手指南',
        links: [
            { text: '注册账户', to: '/' },
            { text: '平台功能', to: '/' },
            { text: '在线交易', to: '/' },
            { text: '买家保障', to: '/' },
        ],
    },
    {
        title: '产品服务',
        links: [
            { text: '找供应', to: '/' },
            { text: '找采购', to: '/' },
            { text: '看行情', to: '/' },
            { text: '发布供应', to: '/' },
            { text: '一件代发', to: '/' },
        ],
    },
    {
        title: '合作联系',
        links: [
            { text: '客户服务 800-888-8888', to: '/' },
            { text: '商务洽谈 0123-88888888', to: '/' },
            { text: '媒体合作 0123-88888888', to: '/' },
            {
                text: '农民伯伯知识产权综合服务平台',
                to: '/',
            },
            {
                text: '农民伯伯乡村振兴合作专区',
                to: '/',
            },
        ],
    },
    {
        title: '关于我们',
        links: [
            { text: '关于我们', to: '/' },
            { text: '惠农大事件', to: '/' },
            { text: '服务协议', to: '/' },
            { text: '隐私政策', to: '/' },
            { text: '规则说明', to: '/' },
        ],
    },
]);
</script>

<style scoped>
.foot_container {
    height: 300px;
    padding: 30px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
}

.section {
    width: 25%;
    text-align: center;
    border-right: 1px solid #ccc;
    padding: 20px;
}

.section:last-child {
    border-right: none;
}

h2 {
    color: green;
    margin-bottom: 10px;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    margin-bottom: 5px;
}
</style>
