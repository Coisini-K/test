<template>
    <div class="back_bt">
        <button id="go-back-btn" @click="goBack">
            <img src="@/assets/images/supply/back.png" />
        </button>
    </div>

    <table cellspacing="0" class="mockup_table">
        <tr class="mockup_tr">
            <td rowspan="7">
                <img
                    :src="image || '@/assets/images/aos/1.webp'"
                    class="mockup_img"
                />
            </td>
        </tr>
        <tr>
            <td colspan="4" class="tr_one tr_head">
                <span class="head_span">{{ product.title }}</span>
            </td>
        </tr>
        <tr>
            <td colspan="1" class="tr_one">单价</td>
            <td colspan="3" class="tr_two Price">
                {{ product.price }}元/{{ product.unit }}
            </td>
        </tr>
        <tr>
            <td class="tr_one">服务</td>
            <td colspan="3" class="tr_two">七天无理由退货·晚发必赔·极速退款</td>
        </tr>
        <tr>
            <td class="tr_one">物流</td>
            <td colspan="3" class="tr_two">浙江金华</td>
        </tr>
        <tr>
            <td rowspan="2" class="tr_one">数量</td>
            <!-- <td class="tr_two">155/78</td> -->
            <td class="tr_tr_there">
                <input type="number" v-model="price" disabled />元
            </td>
            <td class="td">
                <a href="javascript:;" class="decrement" @click="decrement('1')"
                    >-</a
                >
                <input
                    type="text"
                    class="itxt"
                    v-model.number="quantities['1']"
                />
                <a href="javascript:;" class="increment" @click="increment('1')"
                    >+</a
                >
            </td>
        </tr>
        <tr>
            <!-- <td class="tr_two">155/80</td> -->
            <td class="tr_there">938件可售</td>
            <!-- <td class="td">
        <a href="javascript:;" class="decrement" @click="decrement('2')"
          >-</a
        >
        <input type="text" class="itxt" v-model.number="quantities['2']" />
        <a href="javascript:;" class="increment" @click="increment('2')"
          >+</a
        >
      </td> -->
        </tr>
        <tr>
            <td class="td">
                <button class="left_button" @click="prevImage">&lt;</button>
                <div class="div">
                    <img
                        v-for="(image, index) in images"
                        :key="index"
                        :src="image"
                        :class="{ selected: currentIndex === index }"
                        @click="selectImage(index)"
                    />
                </div>
                <button class="right_button" @click="nextImage">&gt;</button>
            </td>
            <td colspan="4">
                <div class="button_one">
                    <button class="collection" @click="addToCollection">
                        ⭐收藏
                    </button>
                    <button class="purchase" @click="makePurchase">
                        🕹️立即购买
                    </button>
                    <button class="cart" @click="addToCart">
                        🛒加入购物车
                    </button>
                </div>
            </td>
        </tr>
    </table>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import useCounterStore from '@/stores/detail';

const router = useRouter();
const mainStore = useCounterStore();
const product = mainStore.items;
// const image = product.image;
// 将 image 改为 ref
const image = ref(product.image || '@/assets/images/aos/1.webp');
let price = product.price;
const quantities = ref({
    1: 1,
    2: 1,
});

const images = ref([
    'src/assets/images/aos/1.webp',
    'src/assets/images/aos/2.webp',
    'src/assets/images/aos/3.webp',
    'src/assets/images/aos/4.webp',
    'src/assets/images/aos/5.webp',
    'src/assets/images/aos/6.webp',
]);

const currentIndex = ref(0);

const increment = (size) => {
    if (quantities.value[size] < 999) {
        quantities.value[size]++;
        price = quantities.value[size] * product.price;
    }
};

const decrement = (size) => {
    if (quantities.value[size] > 1) {
        quantities.value[size]--;
        price = quantities.value[size] * product.price;
    } else {
        alert('必须选择一件');
    }
};

const selectImage = (index) => {
    currentIndex.value = index;
    updateMockupImage();
};

const prevImage = () => {
    currentIndex.value--;
    if (currentIndex.value < 0) {
        currentIndex.value = images.value.length - 1;
    }
    updateMockupImage();
};

const nextImage = () => {
    currentIndex.value++;
    if (currentIndex.value >= images.value.length) {
        currentIndex.value = 0;
    }
    updateMockupImage();
};

const updateMockupImage = () => {
    const currentImage = images.value[currentIndex.value];
    image.value = currentImage;
    // product.image = currentImage;
    // 如果需要更新其他内容，可以在这里添加代码
};

const addToCollection = () => {
    alert('收藏成功');
};

const makePurchase = () => {
    alert('已下单');
};

const addToCart = () => {
    alert('已加入购物车');
};

const goBack = () => {
    // product.image = image;
    router.back();
};
</script>

<style scoped>

.back_bt {
    width: 100%;
    text-align: left;
}
#go-back-btn {
    background-color: rgba(0, 0, 0, 0);
    padding: 10px 13px;
    /* font-size: 16px; */
    border: none;
    cursor: pointer;
    border-radius: 100%;
    /* margin-top: 2%;
  margin-left: 5%; */
    /* float: left; */
}

#go-back-btn img {
    width: 30px;
    height: auto;
}

.mockup_table {
    width: 100%;
    height: 600px;
    /* margin: 5% 0 0 10%; */
    border-collapse: collapse;
}

tr,
td {
    box-sizing: border-box;
}

td {
    padding: 10px;
}

.mockup_tr td {
    width: 600px;
    vertical-align: top;
}

.mockup_img {
    width: 100%;
    /* max-width: 100%; */
    height: 500px;
    /* margin-left: 11%; */
}
.div img:focus,
.div .selected {
    outline: none;
    border: 3px solid #38bf3e;
    transform: scale(1.2);
    transition: all 0.3s ease-in-out;
}

.td {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
}
.td button {
    padding: 0.1vw 0.5vw;
    background-color: none;
}

.td .left_button,
.td .right_button {
    margin: 0 10px;
    cursor: pointer;
    /* text-decoration: none; */
    border: none;
    border-radius: 5px;
    padding: 10px;
}

.div {
    display: flex;
    flex: 1;
    margin-left: 1vw;
    justify-content: space-between;
    flex-wrap: wrap;
}

.div img {
    width: 55px;
    height: auto;
    margin: 1px;
}

.tr_one {
    width: 80px;
    height: 100px;
    color: rgb(94, 88, 88);
}
.tr_head {
    color: black;
    font-size: 1.5vw;
}

.tr_two {
    font-size: 1.2rem;
    width: 120px;
    height: 50px;
    /* text-align: center; */
}
.tr_there {
    width: 200px;
    height: 50px;
}

.tr_tr_there input {
    width: 60px;
    height: 40px;
    padding-top: 10px;
    font-size: 1.2rem;
    border: none;
    background-color: transparent;
}
.button_group {
    display: flex;
    justify-content: space-around;
    margin-top: 20px;
}

.decrement,
.increment {
    font-size: 14px;
    cursor: pointer;
    text-decoration: none;
}

.itxt {
    width: 30px;
    height: 30px;
    text-align: center;
    line-height: 30px;
    margin: 0 10px;
    border-radius: 5px;
    font-size: 14px;
    appearance: none;
    background-color: #fff;
    border: 1px solid #ccc;
}
.button_one {
    display: flex;
    justify-content: space-between;
    /* width: 50%; */
}
.button_one button {
    /* width: 30%; */
    padding: 1vw 2vw;
    /* margin-left:50%; */
    border: none;
    /* background-color: transparent; */
    font-size: 1vw;
    border-radius: 10px;
}
</style>
