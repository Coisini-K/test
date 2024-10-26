<template>
  <div class="about">
    <!-- <h1>About Us</h1> -->
    <CarouselComponent
      :slides="images"
      :interval="3000"
      class="CarouselComponent"
    />
    <!-- 传递 deals、title 和 date 参数 -->
    <LatestDeals
      :deals="deals"
      :title="title"
      :date="date"
      class="LatestDeals"
    />
  </div>
  <div class="app-box">
    <VegetableCategories :vegetables="vegetables" />
    <NewSupplies :supplies="supplies" />
  </div>
  <div class="app-box">
    <RecommendedProducts :products="products" />
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import CarouselComponent from '@/components/supply/CarouselComponent.vue'; // 引入轮播图组件
import LatestDeals from '@/components/supply/LatestDeals.vue';
import VegetableCategories from '@/components/supply/VegetableCategories.vue';
import NewSupplies from '@/components/supply/NewSupplies.vue';
import RecommendedProducts from '@/components/supply/RecommendedProducts.vue';

export default defineComponent({
  name: 'AboutView',
  components: {
    CarouselComponent,
    LatestDeals,
    VegetableCategories,
    NewSupplies,
    RecommendedProducts,
  },

  data() {
    return {
      // 轮播图
      images: [
        new URL('@/assets/images/supply/01.jpg', import.meta.url).href,
        new URL('@/assets/images/supply/02.jpg', import.meta.url).href,
        new URL('@/assets/images/supply/03.jpg', import.meta.url).href,
      ],
      // 成交数据
      title: '最新成交',
      date: '2024-10-19',
      deals: [
        {
          area: '1郑州市荣阳 ',
          sellerName: '益博农资用品批发店',
          productType: '杀虫剂',
        },
        { area: '2定西市岷县', sellerName: '新鑫中药材', productType: '黄芪' },
        {
          area: '3湘西土家族 ',
          sellerName: '湖南湘西猕猴桃苗木基地',
          productType: '砧木',
        },
        {
          area: '4周口市鹿邑 ',
          sellerName: '蒲公英直供中心',
          productType: '花草茶',
        },
        { area: '5昌吉回族自 ', sellerName: '自己销售', productType: '海棠果' },
        {
          area: '6南宁市西乡 ',
          sellerName: '溪山鲜果产地直供',
          productType: '香蕉',
        },
        { area: '7赣州市信丰 ', sellerName: '美物源农业', productType: '橙子' },
        { area: '8永州市江永 ', sellerName: '夏梦秋果业', productType: '柑桔' },
        {
          area: '9达拉特旗',
          sellerName: '兴安盟农人上品科技有限公司',
          productType: '玉米',
        },
        { area: '10', sellerName: '夏梦秋果业', productType: '柑桔' },
        {
          area: '12',
          sellerName: '兴安盟农人上品科技有限公司',
          productType: '玉米',
        },
      ],
      //蔬菜分类 左栏
      vegetables: [
        {
          name: '葱姜蒜类',
          items: [
            '韭菜',
            '蒜苗',
            '大蒜',
            '生菜',
            '大葱',
            '小葱',
            '蒜苔',
            '洋葱',
            '藠头',
            '洋姜',
            '葱仔',
            '韭菜',
            '野蒜',
            '阳荷',
            '红球姜',
            '沙姜',
            '山姜',
            '南姜',
            '风姜',
            '沙葱',
          ],
        },
        {
          name: '叶菜类',
          items: [
            '白菜',
            '小白菜',
            '生菜',
            '菠菜',
            '娃娃菜',
            '木耳菜',
            '香菜',
            '油麦菜',
            '空心菜',
            '菠菜',
            '萝卜菜',
            '芹菜',
            '莴笋',
            '芥菜',
            '菜苔',
            '儿菜',
          ],
        },
        {
          name: '茄果菜类',
          items: ['辣椒', '西红柿', '茄子', '秋葵', '鲜玉米', '玉米笋'],
        },
        {
          name: '食用菌',
          items: [
            '松树菌',
            '元蘑',
            '珊瑚菌',
            '鹿茸菇',
            '栗蘑',
            '龙爪菇',
            '荷灵菇',
            '海鲜菇',
            '毛尖蘑',
            '姬菇',
            '褐蘑',
            '鸡腿菇',
            '竹荪',
            '紫花菌',
            '白灵菇',
            '灵芝菇',
          ],
        },
        {
          name: '蔬菜分类1',
          items: [
            '蔬菜1A',
            '蔬菜1B',
            '蔬菜1C',
            '蔬菜1D',
            '蔬菜1E',
            '蔬菜1F',
            '蔬菜1G',
            '蔬菜1H',
            '蔬菜1I',
            '蔬菜1J',
            '蔬菜1K',
            '蔬菜1L',
            '蔬菜1M',
            '蔬菜1N',
            '蔬菜1O',
            '蔬菜1P',
            '蔬菜1Q',
            '蔬菜1R',
          ],
        },
        {
          name: '蔬菜分类2',
          items: [
            '蔬菜2A',
            '蔬菜2B',
            '蔬菜2C',
            '蔬菜2D',
            '蔬菜2E',
            '蔬菜2F',
            '蔬菜2G',
            '蔬菜2H',
            '蔬菜2I',
            '蔬菜2J',
            '蔬菜2K',
            '蔬菜2L',
            '蔬菜2M',
            '蔬菜2N',
            '蔬菜2O',
            '蔬菜2P',
            '蔬菜2Q',
            '蔬菜2R',
          ],
        },
      ],
      //蔬菜分类 右栏
      supplies: [
        { name: '长白大葱', price: '1.5', unit: '斤' },
        { name: '线椒原产地供应', price: '3.5', unit: '斤' },
        { name: '扁豆原产地供应', price: '1.8', unit: '斤' },
        { name: '云南昭通镇雄县新鲜白萝卜', price: '1800', unit: '吨' },
        { name: '胡萝卜', price: '1', unit: '斤' },
        { name: '上海青浦广东菜心', price: '3', unit: '斤' },
        { name: '黄心娃娃菜', price: '1.9', unit: '斤' },
        { name: '云南昭通镇雄县新鲜白萝卜', price: '1800', unit: '吨' },
      ],
      //好物推荐
      products: [
        {
          image: new URL('@/assets/images/supply/01.jpg', import.meta.url).href,
          title: '东北小香菇干货500g',
          price: 16.8,
          unit: '袋',
          description: '成交8.3万元',
        },
        {
          image: new URL('@/assets/images/supply/02.jpg', import.meta.url).href,
          title: '云南小黄姜嫩姜1/3/5',
          price: 4.6,
          unit: '袋',
          description: '成交45元',
        },
        {
          image: new URL('@/assets/images/supply/01.jpg', import.meta.url).href,
          title: '东北小香菇干货500g',
          price: 16.8,
          unit: '袋',
          description: '成交8.3万元',
        },
        {
          image: new URL('@/assets/images/supply/02.jpg', import.meta.url).href,
          title: '云南小黄姜嫩姜1/3/5',
          price: 4.6,
          unit: '袋',
          description: '成交45元',
        },
        {
          image: new URL('@/assets/images/supply/01.jpg', import.meta.url).href,
          title: '东北小香菇干货500g',
          price: 16.8,
          unit: '袋',
          description: '成交8.3万元',
        },
        {
          image: new URL('@/assets/images/supply/02.jpg', import.meta.url).href,
          title: '云南小黄姜嫩姜1/3/5',
          price: 4.6,
          unit: '袋',
          description: '成交45元',
        },
      ],
    };
  },
});
</script>

<style scoped>
.about {
  display: flex;
  width: 1200px;
  /* border: 1px solid #333; */
}
.app-box {
  width: 1200px;
  display: flex;
  /* border: 1px solid #333; */
}
</style>
