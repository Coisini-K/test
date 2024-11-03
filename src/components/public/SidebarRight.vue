<!-- 右边导航栏 -->

<template>
    <div class="sidebar">
        <nav class="sidebar-nav">
            <ul>
                <li
                    v-for="(item, index) in items"
                    :key="index"
                    @click="navigate(item)"
                >
                    <a :class="{ active: item.isActive }">{{ item.name }}</a>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script>
export default {
    data() {
        return {
            items: [
                { name: '首页', isActive: true },
                { name: '服务', isActive: false },
                { name: '关于', isActive: false },
                { name: '客服', isActive: false },
            ],
        };
    },
    methods: {
        navigate(item) {
            // 模拟导航行为
            console.log(`Navigating to ${item.name}`);
            // 设置当前项为激活状态
            this.items.forEach((i) => (i.isActive = i === item));
        },
    },
};
</script>

<style scoped>
.sidebar {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    right: 0;
    height: 100%;
    width: 66px;
    background-color: #f5f5f5;
    /* padding: 1rem; */
    z-index: 99;
}

.sidebar-nav ul {
    list-style-type: none;
    /* padding: 0; */
}

.sidebar-nav li {
    margin: 5px 0;
}

.sidebar-nav a {
    color: #333;
    display: block;
    padding: 0.4rem;
    border-radius: 7px;
}

.sidebar-nav a:hover,
.sidebar-nav a.active {
    background-color: #ddd;
}
</style>
