<template>
    <div class="vegetable-categories">
        <table>
            <h1 v-if="title">{{ vegetables[6]?.name || '蔬菜' }}</h1>
            <tbody>
                <tr>
                    <td
                        v-for="(category, index) in visibleCategories"
                        :key="index"
                    >
                        <h2>{{ category.name }}</h2>
                        <ul>
                            <li
                                v-for="(item, itemIndex) in category.items"
                                :key="itemIndex"
                                @click="navigateToPage"
                            >
                                {{ item }}
                            </li>
                        </ul>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup>
import { computed, toRaw } from 'vue';

const props = defineProps({
    vegetables: {
        type: Array,
        default: () => [],
    },
    title: {
        type: Boolean,
        default: true,
    },
});

const visibleCategories = computed(() => {
    if (!Array.isArray(props.vegetables)) {
        console.warn('props.vegetables is not an array');
        return [];
    }
    return toRaw(props.vegetables).slice(0, 6);
});

function navigateToPage() {
    window.location.href = 'https://www.cnhnb.com/supply/';
}
</script>

<style scoped>
tbody {
    box-shadow: 0px 3px 3px 0px #ccc;
}
.vegetable-categories {
    width: 100%;
    /* width: 60.4%; */
    height: 100%;
    /* max-height: 100%; */
    /* height: 350px; */
    /* margin-top: 20px; */
}

.vegetable-categories h1 {
    padding-left: 10px;
    width: 100%;
    height: 50px;
    font-size: 1.6em;
    line-height: 50px;
    font-weight: 500;
    background-color: transparent;
    /* margin-left: 5px; */
}

.vegetable-categories table {
    width: 100%;
    height: 100%;
    gap: 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    border-collapse: collapse;
    /* background-color: #fff; */
}

.vegetable-categories tbody {
    width: 100%;
    height: 100%;
}
.vegetable-categories tr {
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    background-color: #fff;
    /* box-shadow: 1px 1px 3px 1px #ccc; */
}

.vegetable-categories td {
    vertical-align: top;
    padding: 8px 15px;
    width: 50%;
    background-color: #fff;
}

.vegetable-categories h2 {
    font-size: 1em;
    font-weight: bold;
    /* margin-bottom: 10px; */
}

.vegetable-categories ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    padding-left: 10px;
}

.vegetable-categories li {
    font-size: 0.8em;
    line-height: 1em;
    margin-bottom: 1.5px;
    cursor: pointer;
    /* 改变鼠标指针形状 */
    /* 平滑过渡 */
    padding: 0 5px 0px;
}

.vegetable-categories li:hover {
    color: #63b555;
    /* 鼠标悬停时改变字体颜色 */
}
</style>
