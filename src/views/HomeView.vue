<!-- HomeView.vue -->
<template>
  <div>
    <h1>Home</h1>
    <!-- 主页内容 -->
    <h1>数组: {{ mainStore.bar }}</h1>

    <!-- 显示当前计数 -->
    <h1>计数: {{ mainStore.count }}</h1>
    <!-- 以下为一系列图标组件，用于展示主页的图标 -->
    <i><DocumentationIcon /></i>
    <i><ToolingIcon /></i>
    <i><EcosystemIcon /></i>
    <i><CommunityIcon /></i>
    <i><SupportIcon /></i>

    <!-- 引入EchartsStore组件，并传递图表配置选项 -->
    <EchartsStore :options="chartOptions" />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

// 导入图标组件
import DocumentationIcon from '@/components/icons/IconDocumentation.vue';
import ToolingIcon from '@/components/icons/IconTooling.vue';
import EcosystemIcon from '@/components/icons/IconEcosystem.vue';
import CommunityIcon from '@/components/icons/IconCommunity.vue';
import SupportIcon from '@/components/icons/IconSupport.vue';

// 导入并使用mainStore
import useMainStore from '@/stores';
const mainStore = useMainStore();

const initBar = () => {
  mainStore.setBar([{ name: '首页', isActive: true },
    { name: '服务', isActive: false },
    { name: '关于我们', isActive: false },
    { name: '联系我们', isActive: false },]);
};

onMounted(() => {
  initBar();
  // console.log("bar:", mainStore.bar);
});

// 导入EchartsStore组件
import EchartsStore from '@/components/EchartsStore.vue';

// 定义图表配置选项
const chartOptions = ref({
  title: {
    text: '曲线趋势图',
  },
  tooltip: {
    trigger: 'axis',
  },
  xAxis: {
    type: 'category',
    data: ['10-21', '10-22', '10-23', '10-24', '10-25', '10-26', '10-27'],
  },
  yAxis: {
    type: 'value',
  },
  series: [
    {
      data: [29.5, 29, 24.5, 31, 19.5, 22.5, 23.5],
      type: 'line',
      smooth: true,
    },
  ],
});
</script>

<style scoped>
/* 为图标设置样式 */
i {
  margin: 10px;
}
</style>
