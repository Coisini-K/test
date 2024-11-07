<template>
    <div class="back_bt">
        <button id="go-back-btn" @click="goBack">
            <img src="@/assets/images/supply/back.png" />
        </button>
    </div>

    <table cellspacing="0" class="mockup_table">
        <tr class="mockup_tr">
            <td rowspan="8">
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
            <td class="tr_one">采购热度</td>
            <td colspan="3" class="tr_two">
                <img
                    v-for="n in repeatCount"
                    :key="n"
                    src="@/assets/images/supply/fire-icon.png"
                    alt="Fire Icon"
                />&nbsp; <span style="color: red;">{{ num1 }}</span> 询价
        <span style="color: red;">{{ num2 }}</span> 成交
        <span style="color: red;">{{ num3 }}</span> 评价
            </td>
        </tr>
        <tr>
            <td class="tr_one">物流</td>
            <td colspan="3" class="tr_two">农民物流</td>
        </tr>
        <tr>
            <td rowspan="2" class="tr_one">数量</td>
            <!-- <td class="tr_two">155/78</td> -->
            <td class="tr_tr_there">
                <input type="text" :value="totalPrice" disabled />
            </td>
            <td class="td">
                <a href="javascript:;" class="decrement" @click="decrement()"
                    >-</a
                >
                <input
                    type="number"
                    class="itxt"
                    v-model="quantity"
                    @blur="onInput"
                />
                <a href="javascript:;" class="increment" @click="increment()"
                    >+</a
                >
            </td>
        </tr>
        <tr>
            <!-- <td class="tr_two">155/80</td> -->
            <td class="tr_there">{{ Random }}件可售</td>
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
import { ref, computed, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import useCounterStore from '@/stores/detail';

const router = useRouter();
const mainStore = useCounterStore();
const product = mainStore.items;

// 定义重复显示的次数
const repeatCount = 5;

// const image = product.image;
// 将 image 改为 ref
const image = ref(product.image || '@/assets/images/aos/1.webp');

const images = ref([
    new URL(product.image, import.meta.url).href,
    new URL('/src/assets/images/aos/2.webp', import.meta.url).href,
    new URL('/src/assets/images/aos/3.webp', import.meta.url).href,
    new URL('/src/assets/images/aos/4.webp', import.meta.url).href,
    new URL('/src/assets/images/aos/5.webp', import.meta.url).href,
    new URL('/src/assets/images/aos/6.webp', import.meta.url).href,
]);

// 定义图片数组
// const images = ref([]);
// onMounted(async () => {
//     try {
//         // 使用 import.meta.glob 动态导入所有图片
//         const modules = import.meta.glob('/src/assets/images/aos/*.webp');

//         let count = 0;
//         const maxImages = 6; // 设置最大导入图片数量

//         for (const path in modules) {
//             if (count >= maxImages) {
//                 break; // 达到最大数量，停止导入
//             }

//             const imagePath = await modules[path]();
//             images.value.push(imagePath.default);
//             count++;
//         }
//     } catch (error) {
//         console.error('Failed to load images:', error);
//     }
// });

// 初始化数量
const quantity = ref(1);

// 返回计算总价格
const totalPrice = computed(() => {
    let price = parseFloat(quantity.value * product.price).toFixed(2);
    if (price <= 0) {
        price = 0;
    }
    return price + '元';
});

// 减少数量
const decrement = () => {
    if (quantity.value > 1) {
        quantity.value--;
    } else {
        alert('必须选择一件');
    }
};

// 增加数量
const increment = () => {
    if (quantity.value < Random.value) {
        quantity.value++;
    }
};

// 输入框变化时的处理
const onInput = (event) => {
    const inputValue = parseInt(event.target.value, 10);
    if (isNaN(inputValue) || inputValue < 0 || inputValue > Random.value) {
        event.target.value = 1;
        quantity.value = 1;
        // alert('购买数大于可售或输入错误');
    } else {
        quantity.value = inputValue;
    }
};

const currentIndex = ref(0);

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

// 定义一个响应式变量来存储随机库存数量
const num1 = ref(0);
const num2 = ref(0);
const num3 = ref(0);
const Random = ref(0); //可售

// 生成随机数的函数
const RandomNumbers = () => {
    return Math.floor(Math.random() * 1000) + 1; // 生成1到1000之间的随机数
};

// 在组件挂载时生成随机数
onMounted(() => {
    Random.value = RandomNumbers();
    num1.value = RandomNumbers();
    num2.value = RandomNumbers();
    num3.value = RandomNumbers();
});

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
    height: 80px;
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
    width: 120px;
    height: 100%;
    /* padding-bottom: 10px; */
    font-size: 1.2rem;
    border: none;
    /* background-color: wheat; */
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
    /* 隐藏输入框两侧的增加和减少按钮 */
    -webkit-appearance: none;
    -moz-appearance: textfield;
    appearance: textfield;
    &::-webkit-inner-spin-button,
    &::-webkit-outer-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
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
