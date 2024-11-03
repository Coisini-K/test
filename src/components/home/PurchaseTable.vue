<template>
    <div class="main">
        <table>
            <thead>
                <tr>
                    <th>采购品种</th>
                    <th>采购量</th>
                    <th>收货地</th>
                    <th>采购方</th>
                    <th class="center">采购等级</th>
                    <th class="center">操作</th>
                </tr>
            </thead>
            <tbody>
                <tr
                    v-for="(item, index) in data"
                    :key="item.id"
                    :class="{ back: index % 2 === 1 }"
                >
                    <td class="icon_box">
                        <img
                            :src="`${iconHref}${index + 1}.png`"
                            alt="icon"
                            class="icon"
                        >
                        {{ item.productType }}
                    </td>
                    <td>{{ item.purchaseAmount }}</td>
                    <td>{{ item.deliveryLocation }}</td>
                    <td>{{ item.buyer }}</td>
                    <td class="center">{{ item.purchaseLevel }}</td>
                    <td class="center">
                        <button @click="onQuoteClick(item)">去报价抢单</button>
                    </td>
                </tr>
            </tbody>
        </table>
        <div class="shop_list">
            <a href="#">点击查看更多采购信息&#32;&#187;</a>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
const iconHref = 'src/assets/images/home/need/';

const data = ref([
    {
        id: 1,
        productType: '鸡',
        purchaseAmount: '300斤/每次',
        deliveryLocation: '湖南省/株洲市',
        buyer: '湖南采购商(8784)',
        purchaseLevel: 'L1',
    },
    {
        id: 2,
        productType: '鸡蛋',
        purchaseAmount: '20000斤/每次',
        deliveryLocation: '广西壮族自治区/玉林市',
        buyer: 'hn1522928',
        purchaseLevel: 'L2',
    },
    {
        id: 3,
        productType: '费油果结果大树',
        purchaseAmount: '2棵/每次',
        deliveryLocation: '/',
        buyer: '湖北采购商(9462)',
        purchaseLevel: 'L1',
    },
    {
        id: 4,
        productType: '灰鹅',
        purchaseAmount: '200斤/每次',
        deliveryLocation: '浙江省/丽水市',
        buyer: '农厂长/老板/魏东升',
        purchaseLevel: 'L2',
    },
    {
        id: 5,
        productType: '饲料',
        purchaseAmount: '200000斤/每次',
        deliveryLocation: '广西壮族自治区/玉林市',
        buyer: 'hn1522928',
        purchaseLevel: 'L2',
    },
]);

function onQuoteClick(item) {
    alert(`点击了 ${item.productType} 的报价按钮`);
    // 在这里处理实际的报价逻辑
}
</script>

<style scoped>
.main {
    width: 915px;
    height: 100%;
    padding: 10px 0;
    background-color: #fff;
    box-shadow: 1px 1px 3px 1px #ccc;
    /* display: flex; */
    /* gap: 10px; */
}

table {
    width: 100%;
    height: 400px;
    border: none;
    border-collapse: collapse;
}

th {
    text-align: left;
    /* margin: 0; */
    padding: 12px 0;
}

th:first-of-type {
    width: 195px;
    padding: 12px 12px 12px 40px;
}

th:last-of-type {
    width: 180px;
}

td {
    /* height: 50px; */
    text-align: left;
}

.icon_box {
    padding: 12px 12px 12px 40px;
    height: 100%;
    display: flex;
    /* flex-direction: row; */
    align-items: center;
    justify-content: flex-start;
}

.center {
    text-align: center;
}

.back {
    background-color: #f6f6f6;
}

.icon {
    width: 30px;
    height: 30px;
}

button {
    width: 80px;
    height: 24px;
    border: 1px solid #39bf3e;
    color: #39bf3e;
    background-color: #fff;
}

.shop_list {
    margin-top: 10px;
    width: 100%;
    height: 21px;
    text-align: center;
}
</style>
