<template>
    <div class="container">
        <HotRecommend />
        <div class="container_box">
            <div class="left">
                <TableForm />
            </div>
            <div class="right">
                <div class="word">
                    <WordCloud />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import HotRecommend from '@/components/procure/HotRecommend.vue';
import TableForm from '@/components/procure/TableForm.vue';
import WordCloud from '@/components/procure/WordCloud.vue';
</script>

<style scoped>
.container {
    width: 100%;
    height: 100%;
}

.container_box {
    width: 100%;
    height: 720px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
}

.left {
    width: 900px;
    height: 100%;
}

.right {
    width: 290px;
    height: 100%;
}

.word {
    width: 100%;
    height: 250px;
}
</style>
