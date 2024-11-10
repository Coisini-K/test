<template>
    <div class="box">
        <vue3-word-cloud
            :words="wordData"
            :color="colorFunction"
            :spacing="1"
        />
    </div>
</template>

<script setup>
import { ref } from 'vue';
import Vue3WordCloud from 'vue3-word-cloud';

const wordData = ref([
    ['玉米', 6],
    ['鸡蛋', 9],
    ['柑桔', 7],
    ['大米', 8],
    ['苹果', 6],
    ['红薯', 7],
    ['橙子', 9],
]);

const colorFunction = ([, weight]) => {
    // return weight > 10 ? 'DeepPink' : weight > 5 ? 'RoyalBlue' : 'Indigo';
    return weight > 5 ? '#000' : '#000';
};
</script>

<!--
animation-duration: 动画持续时间，默认为 1000。
animation-easing: 动画缓动函数，默认为 'ease'。
animation-overlap: 动画重叠，默认为 1。
color: 默认颜色，默认为 'Black'。
font-family: 默认字体，默认为 'serif'。         Roboto
font-size-ratio: 字体大小比例，默认为 0。       5
font-style: 默认字体样式，默认为 'normal'。
font-variant: 默认字体变体，默认为 'normal'。
font-weight: 默认字体粗细，默认为 'normal'。
rotation-unit: 默认旋转单位，默认为 'turn'。    deg
rotation: 默认旋转角度，默认为 0。
spacing: 单词间距，默认为 0。                   10
words: 要显示的单词数组，默认为 []。
-->

<style scoped>
.box {
    width: 100%;
    height: 100%;
    padding: 20px;
}
</style>
