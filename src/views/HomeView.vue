<template>
    <!-- <div class="home_box"> -->
    <div class="home_overview" id="section-0">
        <CategoryList />
        <div class="home_overview_show">
            <CarouselModule :slides="photos" :interval="3000" />
            <div class="home_overview_show_imgs">
                <img src="@/assets/images/home/carousel/4.jpg" alt="no!" />
                <img src="@/assets/images/home/carousel/2.jpg" alt="no!" />
            </div>
        </div>
        <UserInformation />
    </div>
    <div class="home_supply section" id="section-1">
        <NavigationBar :items="items_1" />
        <div class="home_supply_show">
            <RecommendedProducts
                :products="products_1"
                :title="false"
                width="230px"
                height="300px"
            />
            <RecommendedProducts
                :products="products_2"
                :title="false"
                :width="width"
                :height="height"
            />
        </div>
    </div>

    <div class="shop_list">
        <a href="#">点击查看更多商品信息&#32;&#187;</a>
    </div>

    <div class="section" id="section-2">
        <NavigationBar :items="items_2" />
        <div class="purchase_box">
            <PurchaseTable />
            <div class="purchase_right">
                <NewLatest />
            </div>
        </div>
    </div>
    <div class="hot_supply" id="section-3">
        <HotSupply />
    </div>
    <!-- </div> -->

    <SectionsModule />
</template>

<script setup>
import { onMounted } from 'vue';
import NavigationBar from '@/components/public/NavigationBar.vue';
import CarouselModule from '@/components/public/CarouselModule.vue';
import RecommendedProducts from '@/components/public/RecommendedProducts.vue';
import CategoryList from '@/components/home/CategoryList.vue';
import UserInformation from '@/components/home/UserInformation.vue';
import PurchaseTable from '@/components/home/PurchaseTable.vue';
import NewLatest from '@/components/home/NewLatest.vue';
import HotSupply from '@/components/home/HotSupply.vue';
import SectionsModule from '@/components/supply/SectionsModule.vue';

import useMainStore from '@/stores';
import { products_1, products_2 } from '@/constants/home';

const width = '230px';
const height = '300px';

const mainStore = useMainStore();

// const useInfo = ref({
//     avatar: new URL('@/assets/images/home/doge.jpg', import.meta.url).href,
//     name: 'oh my rain',
// });

const initBar = () => {
    const barItems = [
        { name: '精选', isActive: true },
        { name: '热门', isActive: false },
        { name: '采购', isActive: false },
        { name: '供应', isActive: false },
    ];

    // 遍历数组并为每个对象添加 target 属性
    barItems.forEach((item, index) => {
        item.target = `#section-${index}`;
    });

    // 设置到 store 中
    mainStore.setBar(barItems);
};

onMounted(() => {
    initBar();
    // console.log("bar:", mainStore.bar);
});

const items_1 = [
    '热门供应推荐',
    '苹果',
    '柑桔',
    '鸡',
    '牛副产品',
    '红薯',
    '更多',
];
const items_2 = ['大量采购需求', '苹果', '柑桔', '鸡蛋', '红薯', '鸡', '更多'];

const photos = [
    new URL("/src/assets/images/home/carousel/01.jpg", import.meta.url).href,
    new URL("/src/assets/images/home/carousel/02.jpg", import.meta.url).href,
    new URL("/src/assets/images/home/carousel/03.jpg", import.meta.url).href,
    new URL("/src/assets/images/home/carousel/04.jpg", import.meta.url).href,
    new URL("/src/assets/images/home/carousel/05.jpg", import.meta.url).href,
    new URL("/src/assets/images/home/carousel/06.jpg", import.meta.url).href,
];

// const photos = ref([
//     new URL(`/src/assets/images/home/carousel/01.jpg`, import.meta.url).href,
//     new URL(`/src/assets/images/home/carousel/02.jpg`, import.meta.url).href,
//     new URL(`/src/assets/images/home/carousel/03.jpg`, import.meta.url).href,
//     new URL(`/src/assets/images/home/carousel/04.jpg`, import.meta.url).href,
//     new URL(`/src/assets/images/home/carousel/05.jpg`, import.meta.url).href,
//     new URL(`/src/assets/images/home/carousel/06.jpg`, import.meta.url).href,
// ]);

// const photos = ref([]);
// onMounted(async () => {
//     // 使用 import.meta.glob 动态导入所有图片
//     const modules = import.meta.glob(
//         '@/assets/images/home/carousel/0*.{jpg,png}'
//         // '@/assets/images/supply/carousel/*.{jpg,png}',
//     );

//     for (const path in modules) {
//         const imagePath = await modules[path]();
//         photos.value.push(imagePath.default);
//     }
// });
</script>

<style scoped>
/* .home_box {
    width: 1200px;
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
} */
.home_overview {
    /* margin: 10px; */
    width: 100%;
    display: flex;
    flex-direction: row;
    align-content: center;
    justify-content: center;
}

.home_overview_show {
    width: 600px;
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    margin: 0 15px;
}

.home_overview_show_imgs {
    width: 100%;
    margin-top: 20px;
    display: flex;
    flex-direction: row;
    align-content: center;
    justify-content: space-between;
}

.home_overview_show_imgs img {
    width: 48%;
    height: 200px;
    /* margin: auto; */
}

.section {
    width: 100%;
    height: 680px;
    /* margin: 10px 0; */
    /* border: 1px solid #ccc; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
}

.hot_supply {
    width: 100%;
    /* height: 1400px; */
    /* margin: 10px 0; */
    /* border: 1px solid #ccc; */
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 10px;
}

.home_supply_show {
    height: 660px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    /* gap: 10px; */
}

.shop_list {
    width: 100%;
    height: 21px;
    text-align: center;
}

.purchase_box {
    width: 100%;
    height: 600px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.purchase_right {
    width: 280px;
    height: 100%;
}
</style>
