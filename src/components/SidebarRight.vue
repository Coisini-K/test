<!-- 右边导航栏 -->

<template>
  <div class="sidebar">
    <div class="sidebar-header"></div>
    <nav class="sidebar-nav">
      <ul>
        <li v-for="(item, index) in items" :key="index" @click="navigate(item)">
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
        { name: '关于我们', isActive: false },
        { name: '联系我们', isActive: false },
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
  width: 120px;
  background-color: #f8f9fa;
  padding: 1rem;
  z-index: 99;
}

.sidebar-header {
  margin-bottom: 1rem;
}

.sidebar-nav ul {
  list-style-type: none;
  padding: 0;
}

.sidebar-nav a {
  display: block;
  padding: 0.5rem;
  color: #333;
}

.sidebar-nav a:hover,
.sidebar-nav a.active {
  background-color: #e9ecef;
}
</style>
