<template>
    <div class="container">
        <HeaderView v-if="isDisplay" />
        <SidebarRight v-if="isDisplay" />
        <SidebarLeft v-if="isDisplay" />
        <WatchRouter />
        <div class="box">
            <RouterView />
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue';
import { RouterView } from 'vue-router';
import HeaderView from '@/views/HeaderView.vue';
import SidebarRight from '@/components/public/SidebarRight.vue';
import SidebarLeft from '@/components/public/SidebarLeft.vue';
import WatchRouter from '@/components/public/WatchRouter.vue';

import useDisplayStore from '@/stores/solid';
const displayStore = useDisplayStore();
// 创建一个计算属性，依赖于 displayStore.isDisplay 用于判断组件是否显示
const isDisplay = computed(() => {
    const sticky = displayStore.isDisplay;
    // console.log('sticky value:', sticky);
    return sticky;
});
</script>

<style scoped>
.container {
    /* border: 1px solid #000000; */
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    /* flex-wrap: wrap; */
    align-items: center;
    justify-content: center;
}

.box {
    /* border: 1px solid #ff0000; */
    width: 1200px;
    height: 100%;
    min-height: calc(100vh - 20px);
    /* min-height: calc(100vh - 340px); */
    margin: 10px;
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: flex-start;
    gap: 20px;
}
</style>
