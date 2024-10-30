<template>
  <div class="vegetable-categories">
    <h1>{{ vegetables[6]?.name || '蔬菜' }}</h1>
    <table>
      <tbody>
        <tr>
          <td v-for="(category, index) in visibleCategories" :key="index">
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
.vegetable-categories {
  width: 60.4%;
  height: 350px;
  margin-top: 20px;
}

.vegetable-categories h1 {
  width: 100%;
  /* background-color: #7e2d2d; */
  height: 50px;
  font-size: 1.6em;
  font-weight: 500;
  /* margin-left: 5px; */
}

.vegetable-categories table {
  width: 100%;
  height: 300px;
  border-collapse: collapse;
  background-color: #ffffff;
  box-shadow: 2px 2px 5px 0 rgba(0, 0, 0, 0.2);
}

.vegetable-categories tr {
  display: flex;
  flex-wrap: wrap;
}

.vegetable-categories td {
  vertical-align: top;
  padding: 15px;
  width: 50%;
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
  transition: color 0.3s ease;
  /* 平滑过渡 */
  padding: 0 5px 0px;
}

.vegetable-categories li:hover {
  color: #63b555;
  /* 鼠标悬停时改变字体颜色 */
}
</style>
