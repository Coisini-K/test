<template>
  <!-- <div class="supply_box"> -->
  <div class="about">
    <!-- <h1>About Us</h1> -->
    <CarouselComponent :slides="images" :interval="3000" class="carousel" />
    <!-- 传递 deals、title 和 date 参数 -->
    <LatestDeals
      :deals="deals"
      :title="title"
      :info="info"
      :date="date"
      class="latestDeals"
    />
  </div>
  <div class="app-box">
    <VegetableCategories :vegetables="vegetables" />
    <NewSupplies :supplies="supplies" :vegetables="vegetables" />
  </div>
  <div class="app-box">
    <RecommendedProducts :products="products" :vegetables="vegetables" />
  </div>
  <div class="app-box">
    <VegetableCategories :vegetables="agriculture"></VegetableCategories>
    <NewSupplies :supplies="machinery" :vegetables="agriculture" />
  </div>
  <div class="app-box">
    <RecommendedProducts :products="equipment" :vegetables="agriculture" />
  </div>
  <!-- </div> -->
</template>

<script>
import { defineComponent } from 'vue';
import CarouselComponent from '@/components/CarouselComponent.vue'; // 引入轮播图组件
import LatestDeals from '@/components/LatestDeals.vue';
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
      title: true,
      info: '最新成交',
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
        { name: '蔬菜' },
      ],
      agriculture: [
        {
          name: '农用机械设备',
          items: [
            '农用拖拉机',
            '农机配件',
            '耕整机',
            '食品加工机械',
            '果蔬机械',
            '植保机',
            '饲料机',
            '肥料机械',
            '发电设备',
            '屠宰及肉类加工设备',
            '食用菌机械',
          ],
        },
        {
          name: '肥料',
          items: [
            '复合肥',
            '缓释肥',
            '螯合肥料',
            '单质肥',
            '生物肥',
            '水溶肥',
            '叶面肥',
            '有机肥',
            '间接肥料',
            '果实着色剂',
            '肥料套餐',
          ],
        },
        {
          name: '农药',
          items: [
            '杀虫剂',
            '杀菌剂',
            '杀螨剂',
            '除草剂',
            '生物农药',
            '植物生长调节剂',
            '助剂',
            '农药套餐',
            '拌种剂',
          ],
        },
        {
          name: '饲料',
          items: [
            '青绿饲料',
            '预混料',
            '宠物饲料',
            '饼粕饲料',
            '蛋白质补充饲料',
            '干草类饲料',
            '谷物饲料',
            '秸秆饲料',
            '糠麸类饲料',
            '矿物质饲料',
            '配合饲料',
            '青贮饲料',
            '糟渣类饲料',
            '发酵饲料',
            '饲料添加剂',
          ],
        },
        {
          name: '农用百货',
          items: [
            '农用工具',
            '渔具',
            '劳保用品',
            '硫磺粉',
            '保水剂',
            '不锈钢管',
            '热熔胶',
            '塑料膜',
            '护栏',
            '栽培基质',
            '活性花粉',
            '炭',
            '木材',
            '养殖百货',
            '育苗防护资材',
            '园林管理资材',
          ],
        },
        {
          name: '排灌设备',
          items: [
            '涵管',
            '管材管件',
            '滴灌喷灌',
            '过滤设备',
            '灌溉设备',
            '泵',
            '格栅',
            '排水板',
            '蓄水板',
          ],
        },
        {
          name: '农资农具',
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
      machinery: [
        {
          name: '精草铵磷铵盐广谱内吸除草剂除灭一年生和多年生杂草',
          price: '15',
          unit: '瓶',
        },
        {
          name: '2024湖北江陵新稻草二次加工过风选无土无杂质',
          price: '688',
          unit: '吨',
        },
        {
          name: '15%烯效唑悬浮剂花椒树控梢控旺调节生长植株健壮',
          price: '50',
          unit: '瓶',
        },
        { name: '电动搬运叉车', price: '28500', unit: '辆' },
        {
          name: '益生菌发酵大豆纯黄豆发酵大豆底肥发酵黄豆',
          price: '96',
          unit: '袋',
        },
        {
          name: '新款摘花椒器花椒采摘专用器防刺手套剪花椒神器',
          price: '19.8',
          unit: '把',
        },
        {
          name: '逆能量有机水溶肥解盐碱调理土壤缓解重茬及连作障碍',
          price: '180',
          unit: '件',
        },
      ],
      //好物推荐
      products: [
        {
          image: new URL('@/assets/images/supply/01.jpg', import.meta.url).href,
          title: '广西/云南黄金水果玉米新鲜发货3/5/9斤一件代发包邮批发',
          price: '16.80',
          unit: '/箱',
          description: '成交8.3万元',
        },
        {
          image: new URL('@/assets/images/supply/02.jpg', import.meta.url).href,
          title: '北虫草 【500g大孢子头】虫草虫草花金虫草蛹虫草干货泡茶',
          price: '4.60',
          unit: '/包',
          description: '成交45元',
        },
        {
          image: new URL('@/assets/images/supply/01.jpg', import.meta.url).href,
          title: '古田丑耳3朵试吃装',
          price: '11.90',
          unit: '/包',
          description: '成交8.3万元',
        },
        {
          image: new URL('@/assets/images/supply/02.jpg', import.meta.url).href,
          title: '黑木耳 富贵干货大礼包B款，年货送礼高档礼盒装',
          price: '59.00',
          unit: '/袋',
          description: '成交45元',
        },
        {
          image: new URL('@/assets/images/supply/01.jpg', import.meta.url).href,
          title: '福建古田银耳现摘现发古田白木耳易糯多胶，1朵100G左右',
          price: '3.00',
          unit: '/朵',
          description: '成交8.3万元',
        },
        {
          image: new URL('@/assets/images/supply/02.jpg', import.meta.url).href,
          title: '蒙阴紫罗兰紫薯-皮薄肉细，软糯香甜，口口惊艳，好吃到惊讶',
          price: '14.50',
          unit: '/袋',
          description: '成交45元',
        },
      ],
      equipment: [
        {
          image: new URL('@/assets/images/supply/01.jpg', import.meta.url).href,
          title: '80%代森锰锌1000克 代森猛锌辛杀菌剂早疫病黑星病炭疽病',
          price: '31.80',
          unit: '/袋',
          description: '成交8.3万元',
        },
        {
          image: new URL('@/assets/images/supply/02.jpg', import.meta.url).href,
          title: '颗粒锌 田当家EDTA螯合锌微量元素叶面肥糖醇小分子锌小叶黄',
          price: '28.00',
          unit: '/袋',
          description: '成交45元',
        },
        {
          image: new URL('@/assets/images/supply/01.jpg', import.meta.url).href,
          title: '飞防专用助剂航空植保无人机增效剂防漂移促沉降强渗透耐冲刷',
          price: '55.00',
          unit: '/瓶',
          description: '成交8.3万元',
        },
        {
          image: new URL('@/assets/images/supply/02.jpg', import.meta.url).href,
          title: '36%春雷喹啉铜溃疡病角斑病软腐病稻瘟病细菌病害专用杀菌剂',
          price: '2.00',
          unit: '/袋',
          description: '成交45元',
        },
        {
          image: new URL('@/assets/images/supply/01.jpg', import.meta.url).href,
          title: '0.5%阿维菌素颗粒剂 阿维菌素农药黄瓜根结线虫杀虫剂',
          price: '3.00',
          unit: '/袋',
          description: '成交8.3万元',
        },
        {
          image: new URL('@/assets/images/supply/02.jpg', import.meta.url).href,
          title: '蒙阴紫罗兰紫薯-皮薄肉细，软糯香甜，口口惊艳，好吃到惊讶',
          price: '11.80',
          unit: '/袋',
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
  width: 100%;
  justify-content: space-between;
  /* border: 1px solid #333; */
}
.carousel {
  width: 700px;
}

.latestDeals {
  width: 460px;
  height: 340px;
}
.app-box {
  width: 100%;
  display: flex;
  /* border: 1px solid #333; */
}
</style>
