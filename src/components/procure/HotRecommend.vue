<template>
    <div class="recommend-cates sub-wrap">
        <ul>
            <li class="label-recommend">热门推荐</li>
            <li
                class="sub-row no-padding"
                v-for="(category, index) in categories"
                :key="index"
            >
                <a
                    v-for="(item, idx) in category.items"
                    :key="idx"
                    :href="item.url"
                    target="_blank"
                    class="third-cate-item link-expanded"
                >
                    {{ item.name }}
                </a>
            </li>
        </ul>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const categories = ref([
    {
        items: [
            { name: '苹果', url: '/purchase/apple' },
            { name: '柑桔', url: '/purchase/citrus' },
            { name: '鸡', url: '/purchase/chicken' },
            { name: '鸡蛋', url: '/purchase/egg' },
            { name: '红薯', url: '/purchase/sweetpotato' },
            { name: '猪副产品', url: '/purchase/pigbyproducts' },
            { name: '辣椒', url: '/purchase/chili' },
            { name: '鸡苗', url: '/purchase/chickensalvage' },
            { name: '土豆', url: '/purchase/potato' },
            { name: '生姜', url: '/purchase/ginger' },
            { name: '大蒜', url: '/purchase/garlic' },
            { name: '葡萄', url: '/purchase/grape' },
            { name: '大米', url: '/purchase/rice' },
            { name: '白菜', url: '/purchase/cabbage' },
            { name: '柚子', url: '/purchase/grapefruit' },
        ],
    },
    {
        items: [
            { name: '甘蔗', url: '/purchase/sugarcane' },
            { name: '板栗', url: '/purchase/chestnut' },
            { name: '榴莲', url: '/purchase/durian' },
            { name: '大闸蟹', url: '/purchase/crab' },
            { name: '干玉米', url: '/purchase/corn' },
            { name: '有机肥', url: '/purchase/fertilizer' },
            { name: '西红柿', url: '/purchase/tomato' },
            { name: '核桃', url: '/purchase/walnut' },
            { name: '梨', url: '/purchase/pear' },
            { name: '大葱', url: '/purchase/scallion' },
            { name: '花生', url: '/purchase/peanut' },
            { name: '杀菌剂', url: '/purchase/fungicide' },
            { name: '羊', url: '/purchase/sheep' },
            { name: '山药', url: '/purchase/yam' },
            { name: '牛', url: '/purchase/cattle' },
        ],
    },
    {
        items: [
            { name: '鱼苗', url: '/purchase/fishseed' },
            { name: '橙子', url: '/purchase/orange' },
            { name: '鲜枣', url: '/purchase/jujube' },
            { name: '杀虫剂', url: '/purchase/insecticide' },
            { name: '包菜', url: '/purchase/cabbage' },
            { name: '大豆', url: '/purchase/soybean' },
            { name: '鲜玉米', url: '/purchase/freshcorn' },
            { name: '鹅苗', url: '/purchase/gooseseed' },
            { name: '萝卜', url: '/purchase/radish' },
            { name: '干菜', url: '/purchase/driedvegetables' },
            { name: '鸭', url: '/purchase/duck' },
            { name: '休闲零食', url: '/purchase/snacks' },
            { name: '生蚝', url: '/purchase/oyster' },
            { name: '黄精', url: '/purchase/huangjing' },
        ],
    },
]);
</script>

<style scoped>
.recommend-cates {
    padding: 10px;
}

.label-recommend {
    font-weight: bold;
    font-size: 18px;
    margin-bottom: 10px;
}

.sub-row {
    margin-bottom: 15px;
}

.third-cate-item {
    margin-right: 15px;
}

ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
}

li {
    border-bottom: 1px solid #ccc;
    padding: 10px;
}

li:last-child {
    border-bottom: none;
}
</style>
