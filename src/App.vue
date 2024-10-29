<script setup>
import { RouterView } from 'vue-router';
import HeaderView from '@/views/HeaderView.vue';
// import SidebarRight from '@/components/SidebarRight.vue';
import SidebarLeft from '@/components/SidebarLeft.vue';
</script>

<template>
  <div class="container">
    <HeaderView />
    <!-- <SidebarRight /> -->
    <SidebarLeft />
    <div class="box">
      <RouterView />
    </div>
  </div>
</template>

<style scoped>
.container {
  /* border: 1px solid #000000; */
  width: 1600px;
  max-width: 100vw;
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
  margin: 10px;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: flex-start;
  gap: 30px;
}
</style>
