<template>
    <div class="navigation">
        <ul class="bar">
            <li v-for="(item, index) in items" :key="index">
                <a
                    href="#"
                    class="link"
                    :class="{ active: isActive(index) }"
                    @click.prevent="handleClick(index)"
                >
                    {{ item }}
                </a>
            </li>
        </ul>
        <div class="search">
            <SearchBox :title="false" txt="搜索更多商品" />
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import SearchBox from '@/components/SearchBox.vue';

// 接收来自父组件的数据
// const props = defineProps({
defineProps({
    items: {
        type: Array,
        required: true,
    },
});

// 当前激活的索引
const activeIndex = ref(0);

// 处理点击事件
const handleClick = (index) => {
    activeIndex.value = index;
};

// 判断当前项是否激活
const isActive = (index) => {
    return activeIndex.value === index;
};

onMounted(() => {
    isActive(0);
});
</script>

<style scoped>
.navigation {
    width: 100%;
    height: 66px;
    padding: 10px;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: space-around;
}

.bar {
    flex: 1;
    /* width: 900px; */
    height: 100%;
    padding: 0;
    list-style-type: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

li {
    flex-grow: 1;
    height: 100%;
    display: inline-block;
    /* margin-right: 10px; */
    font-size: 1.2rem;
}

.link {
    height: 100%;
    padding: 10px 0;
    /* border-radius: 10px; */
    display: flex;
    align-items: center;
    justify-content: center;
}

.link:hover {
    color: #39bf3e;
    padding-bottom: 8px;
    background-color: transparent;
    border-bottom: 2px solid #8ff6a6;
}

.link.active {
    color: #39bf3e;
    padding-bottom: 8px;
    background-color: transparent;
    border-bottom: 2px solid #8ff6a6;
}

.search {
    width: 300px;
    height: 100%;
    padding: 0 30px;
}
</style>
