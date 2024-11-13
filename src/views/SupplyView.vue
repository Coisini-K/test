<template>
    <!-- <div class="supply_box"> -->
    <!-- <div class="about"> -->
    <div class="about-box">
        <CarouselModule :slides="images" :interval="3000" class="carousel" />
        <LatestDeals
            :deals="deals"
            :title="title"
            :info="info"
            :date="date"
            class="latestDeals"
        />
    </div>

    <div
        v-for="(section, index) in allSections"
        :key="`section-${index}`"
        class="app-box"
        :id="`section-${index}`"
    >
        <template v-if="section.type === 'supply'">
            <SupplyUlLeft :vegetables="section.vegetables" :shadow="true" />
            <SupplyUlRight
                :supplies="section.supplies"
                :vegetables="section.vegetables"
            />
        </template>

        <template v-if="section.type === 'product'">
            <RecommendedProducts
                :products="section.products"
                :vegetables="section.vegetables"
                :title="true"
            />
        </template>
    </div>

    <div class="footer">
        <SectionsModule />
    </div>
    <!-- </div> -->
    <!-- </div> -->
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
// 轮播图
import CarouselModule from '@/components/public/CarouselModule.vue';
// 文字列表滚动
import LatestDeals from '@/components/public/LatestDeals.vue';
// 供应页面文字左右列表及图片列表
import SupplyUlLeft from '@/components/supply/SupplyUlLeft.vue';
import SupplyUlRight from '@/components/supply/SupplyUlRight.vue';
import RecommendedProducts from '@/components/public/RecommendedProducts.vue';
import SectionsModule from '@/components/public/SectionsModule.vue';

import {
    deals,
    vegetables,
    agriculture,
    grain,
    seeds,
    Agricultural,
    supplies,
    machinery,
    rice,
    seedlings,
    sideline,
    products,
    equipment,
    noodles,
    planting,
    processing,
} from '@/constants/supply';

// 左边电梯导航栏
import useMainStore from '@/stores';
const mainStore = useMainStore();
const initBar = () => {
    const barItems = [
        { name: '蔬菜', isActive: true },
        { name: '农具', isActive: false },
        { name: '粮食', isActive: false },
        { name: '种子', isActive: false },
        { name: '农副', isActive: false },
    ];

    // 遍历数组并为每个对象添加 target 属性
    barItems.forEach((item, index) => {
        item.target = `#section-${index * 2}`;
    });

    // 设置到 store 中
    mainStore.setBar(barItems);
};

onMounted(() => {
    initBar();
    // console.log("bar:", mainStore.bar);
});

// 轮播图
// const images = [
//     '/src/assets/images/supply/carousel/1.jpg',
//     '/src/assets/images/supply/carousel/2.jpg',
//     '/src/assets/images/supply/carousel/3.jpg',
//     '/src/assets/images/supply/carousel/4.jpg',
// ];

const images = ['supply_1.jpg', 'supply_2.jpg', 'supply_3.jpg', 'supply_4.jpg'];

// const images = [
//     new URL('@/assets/images/supply/carousel/1.jpg', import.meta.url).href,
//     new URL('@/assets/images/supply/carousel/2.jpg', import.meta.url).href,
//     new URL('@/assets/images/supply/carousel/3.jpg', import.meta.url).href,
//     new URL('@/assets/images/supply/carousel/4.jpg', import.meta.url).href,
// ];

//轮播图 遍历所有照片
// const images = ref([]);

// onMounted(async () => {
//     // 使用 import.meta.glob 动态导入所有图片
//     const modules = import.meta.glob(
//         '@/assets/images/supply/carousel/*.{jpg,jpeg,png,gif}'
//     );

//     for (const path in modules) {
//         const imagePath = await modules[path]();
//         images.value.push(imagePath.default);
//     }
// });

// 成交数据
const title = ref(true);
const info = ref('最新成交');
// 获取当前日期并格式化
const date = ref(formatCurrentDate());
// 格式化当前日期的函数
function formatCurrentDate() {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}
// const date = ref('2024-10-19');

const allSections = computed(() => {
    // 第一组：vegetables, supplies, products
    const firstGroup = vegetables
        .slice(0, 1)
        .map(() => [
            { vegetables: vegetables, supplies, type: 'supply' },
            { products, vegetables: vegetables, type: 'product' },
        ])
        .flat();

    // 第二组：agriculture, machinery, equipment
    const secondGroup = [
        { vegetables: agriculture, supplies: machinery, type: 'supply' },
        { products: equipment, vegetables: agriculture, type: 'product' },
    ];

    // 第三组：grain, rice, noodles
    const thirdGroup = [
        { vegetables: grain, supplies: rice, type: 'supply' },
        { products: noodles, vegetables: grain, type: 'product' },
    ];
    // 第四组：seeds, seedlings, planting
    const fourthGroup = [
        { vegetables: seeds, supplies: seedlings, type: 'supply' },
        { products: planting, vegetables: seeds, type: 'product' },
    ];
    // 第五组：Agricultural, sideline, processing
    const fifthGroup = [
        { vegetables: Agricultural, supplies: sideline, type: 'supply' },
        { products: processing, vegetables: Agricultural, type: 'product' },
    ];

    return [
        ...firstGroup,
        ...secondGroup,
        ...thirdGroup,
        ...fourthGroup,
        ...fifthGroup,
    ];
});
</script>

<style scoped>
.about-box {
    width: 100%;
    display: flex;
    justify-content: space-between;
    background-color: #fff;
    box-shadow: 0px 0px 3px 2px #ccc;
}

.section {
    display: flex;
}

.carousel {
    width: 700px;
}

.latestDeals {
    width: 460px;
    height: 340px;
}

.app-box {
    width: 100%;
    height: 350px;
    display: flex;
    /* align-items: flex-start; */
    /* justify-content: flex-start; */
    /* border: 1px solid #333; */
}

.footer {
    width: 100%;
}
</style>
