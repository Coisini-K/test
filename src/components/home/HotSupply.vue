<template>
    <div class="box" v-for="(product, index) in products" :key="index">
        <div
            class="title"
            :style="{ backgroundImage: `url(${getImgHref(index)})` }"
        >
            <div class="name">
                {{ product[6].name }}
            </div>
            {{ title }}
        </div>
        <div class="list">
            <SupplyUlLeft :vegetables="product" :title="false" />
        </div>
        <div class="shop">
            <div class="shop_title">好货推荐</div>
            <div class="recommended_products">
                <div
                    class="product"
                    v-for="(product, index) in products_3"
                    :key="index"
                    @click="navigateToHome(product)"
                >
                    <img :src="product.image" alt="Product Image" />
                    <div class="product_box">
                        <div class="product_info">
                            <div class="product_price">
                                {{ product.price || '价格' }}&#32;元/{{
                                    product.unit || '单位'
                                }}
                            </div>
                            <div class="product_description">
                                {{ product.description || '描述' }}
                            </div>
                        </div>
                        <div class="product_title">
                            {{ product.title || '标题' }}
                        </div>
                        <div class="product_server">
                            <div>不对版包赔</div>
                            <div>掺假包赔</div>
                        </div>
                        <div class="product_icon">
                            <img :src="getIconHref('year1')" alt="icon" />
                            <!-- <img :src="`${iconHref}b.png`" alt="icon" /> -->
                            <img :src="getIconHref('b')" alt="icon" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="supply">
            <NewSupply />
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import SupplyUlLeft from '@/components/supply/SupplyUlLeft.vue';
import {
    vegetables,
    agriculture,
    grain,
    seeds,
    Agricultural,
} from '@/constants/supply';
import { products_3 } from '@/constants/home';
import NewSupply from '@/components/home/NewSupply.vue';
const products = ref([vegetables, agriculture, grain, seeds, Agricultural]);

const title = '品种丰富 以质论价';
// :style="{ backgroundImage: `url(${imgHref}${index + 1}.png)` }"
// const imgHref = 'src/assets/images/home/supply/';
// const iconHref = 'src/assets/images/home/icon/';

const getImgHref = (index) => {
    return new URL(
        `/src/assets/images/home/supply/${index + 1}.png`,
        import.meta.url
    ).href;
};
const getIconHref = (index) => {
    return new URL(`/src/assets/images/home/icon/${index}.png`, import.meta.url)
        .href;
};

// defineProps({
//     products: {
//         type: Array,
//         required: true,
//         default: () => [],
//     },
// });
</script>

<style scoped>
.box {
    width: 100%;
    height: 320px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    /* border: 1px solid #ccc; */
    /* box-shadow: 0px 3px 3px 0px #ccc; */
    /* gap: 2px; */
}

.title {
    width: 150px;
    height: 100%;
    font-size: 0.8rem;
    background-size: cover;
    background-position: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    box-shadow: 0px 0px 3px 0px #ccc;
    /* border: 1px solid #ccc; */
}

.name {
    width: 100%;
    height: 24px;
    margin: 20px 0;
    font-size: 1.2rem;
    padding-left: 15px;
    border-left: 10px solid #cff6d6;
}

.list {
    width: 540px;
    height: 100%;
    /* border: 1px solid #ccc; */
}

.shop {
    width: 322px;
    height: 100%;
    background-color: #fff;
    /* box-shadow: 0px 3px 3px 0px #ccc; */
    /* border: 1px solid #ccc; */
}

.shop_title {
    width: 322px;
    height: 24px;
    margin: 10px 0;
    padding-left: 15px;
    border-left: 7px solid #cff6d6;
}

.recommended_products {
    width: 100%;
    height: 270px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
}

.product {
    width: 145px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
}

.product img {
    width: 145px;
    height: 145px;
}

.product_box {
    width: 100%;
    height: 120px;
    padding: 10px 5px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 5px;
}

.product_info {
    width: 100%;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.product_price {
    width: 55%;
    height: 100%;
    font-size: 0.9rem;
}

.product_description {
    width: 45%;
    height: 100%;
    font-size: 0.6rem;
    display: flex;
    align-items: flex-end;
}

.product_title {
    width: 100%;
    height: 20px;
    font-size: 0.8rem;
    overflow: hidden;
    /* 隐藏超出的内容 */
    text-overflow: ellipsis;
    /* 使用省略标记(...)来代替被修剪的文本 */
    white-space: nowrap;
    /* 不换行 */
}

.product_server {
    width: 100%;
    height: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
}

.product_server div {
    width: auto;
    height: 100%;
    padding: 2px;
    margin-right: 5px;
    border-radius: 7px;
    font-size: 0.6rem;
    /* display: flex;
    align-items: center;
    justify-content: center; */
    color: #4869af;
    border-color: #eff4fb;
    border: 1px solid #4869af;
}

.product_icon {
    width: 100%;
    height: 15px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    /* border-radius: 50%; */
}

.product_icon img {
    width: auto;
    height: 100%;
    margin-right: 5px;
    /* border-radius: 50%; */
}

.supply {
    width: 175px;
    height: 100%;
    /* border: 1px solid #ccc; */
    /* box-shadow: 0px 0px 3px 0px #ccc; */
}
</style>
