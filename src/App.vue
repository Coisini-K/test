<template>
    <div class="container">
        <HeaderView />
        <SidebarRight />
        <SidebarLeft />
        <div class="box">
            <RouterView />
        </div>
    </div>
</template>

<script setup>
import { RouterView } from 'vue-router';
import HeaderView from '@/views/HeaderView.vue';
import SidebarRight from '@/components/public/SidebarRight.vue';
import SidebarLeft from '@/components/public/SidebarLeft.vue';
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
    min-height: calc(100vh - 340px);
    margin: 10px;
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: flex-start;
    gap: 20px;
}
</style>
