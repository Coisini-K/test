<template>
    <div class="container">
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
            { text: '注册账户', to: '/register' },
            { text: '平台功能', to: '/features' },
            { text: '在线交易', to: '/transactions' },
            { text: '买家保障', to: '/buyer-protection' },
        ],
    },
    {
        title: '产品服务',
        links: [
            { text: '找供应', to: '/find-supply' },
            { text: '找采购', to: '/find-purchase' },
            { text: '看行情', to: '/market-trends' },
            { text: '发布供应', to: '/post-supply' },
            { text: '一件代发', to: '/dropshipping' },
        ],
    },
    {
        title: '合作联系',
        links: [
            { text: '客户服务 400-008-6888', to: '/customer-service' },
            { text: '商务洽谈 0731-88189999', to: '/business-talks' },
            { text: '媒体合作 0731-88189999', to: '/media-cooperation' },
            { text: '惠农网知识产权综合服务平台', to: '/intellectual-property-platform' },
            { text: '惠农网乡村振兴合作专区', to: '/rural-revitalization-zone' },
        ],
    },
    {
        title: '关于我们',
        links: [
            { text: '关于我们', to: '/about-us' },
            { text: '惠农大事件', to: '/major-events' },
            { text: '服务协议', to: '/service-agreement' },
            { text: '隐私政策', to: '/privacy-policy' },
            { text: '规则说明', to: '/rules-explanation' },
        ],
    },
]);
</script>

<style scoped>
.container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 30vh;
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