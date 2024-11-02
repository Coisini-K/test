<!-- 显示前一天，以及修改前后天数 -->

<!--
<HandoffDAte />

import HandoffDAte from '@/components/HandoffDAte.vue';
-->

<template>
    <div class="date_box">
        <!-- 左箭头按钮 -->
        <button class="arrow arrow-left" @click="prevDate">
            <!-- 左箭头符号 -->
            <span>&#10094;</span>
        </button>
        <div class="date">
            {{ days }}
        </div>
        <!-- 右箭头按钮 -->
        <button
            class="arrow arrow-right"
            :disabled="isToday"
            :class="{ disabled: isToday }"
            @click="nextDate"
        >
            <!-- 右箭头符号 -->
            <span>&#10095;</span>
        </button>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { getDates, getAdjacentDates } from '@/utils/dateUtils';

// 初始化当前日期
const dates = getDates(null, 'MM月DD日');
const yesterday = ref(dates.previousDate);
const currentDate = ref(yesterday.value); // 确保 currentDate 是一个独立的响应式变量

// 计算属性，返回当前日期
const days = computed(() => currentDate.value);

// 计算属性，检查当前日期是否等于前一天
const isToday = computed(() => {
    return days.value === yesterday.value;
});

// 更新日期的函数
const updateDate = (newDate) => {
    currentDate.value = newDate;
};

// 上一天按钮点击事件
const prevDate = () => {
    const { previousDate } = getAdjacentDates(currentDate.value);
    updateDate(previousDate);
    // console.log(currentDate.value);
};

// 下一天按钮点击事件
const nextDate = () => {
    const { nextDate } = getAdjacentDates(currentDate.value);
    updateDate(nextDate);
    // console.log(currentDate.value);
};
</script>

<style scoped>
.date_box {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    /* border: 1px solid #ccc; */
    border-radius: 5px;
}

.date {
    font-size: 1.2rem;
    /* padding: 5px 10px; */
    /* width: 100%; */
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.arrow {
    /* width: 100%; */
    height: 100%;
    font-size: 1rem;
    padding: 0 8px;
    margin-bottom: 2px;
    cursor: pointer;
    background-color: #8ff6a6;
    border: none;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.arrow:hover {
    background-color: #cff6d6;
}

.arrow-left {
    margin-right: 10px;
}

.arrow-right {
    margin-left: 10px;
}

.arrow-right.disabled {
    background-color: #ccc;
    cursor: not-allowed;
}
</style>
