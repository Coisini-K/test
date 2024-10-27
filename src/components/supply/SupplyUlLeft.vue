<!--
供应页面
文字列表模块
左
-->

<template>
  <div class="vegetable-categories">
    <h1>{{ vegetables[6].name }}</h1>
    <table>
      <tbody>
        <tr>
          <td>
            <h2>{{ vegetables[0].name }}</h2>
            <ul>
              <li
                v-for="(item, index) in vegetables[0].items"
                :key="index"
                @click="navigateToPage"
              >
                {{ item }}
              </li>
            </ul>
          </td>
          <td>
            <h2>{{ vegetables[1].name }}</h2>
            <ul>
              <li
                v-for="(item, index) in vegetables[1].items"
                :key="index"
                @click="navigateToPage"
              >
                {{ item }}
              </li>
            </ul>
          </td>
          <td>
            <h2>{{ vegetables[2].name }}</h2>
            <ul>
              <li
                v-for="(item, index) in vegetables[2].items"
                :key="index"
                @click="navigateToPage"
              >
                {{ item }}
              </li>
            </ul>
          </td>
          <td>
            <h2>{{ vegetables[3].name }}</h2>
            <ul>
              <li
                v-for="(item, index) in vegetables[3].items"
                :key="index"
                @click="navigateToPage"
              >
                {{ item }}
              </li>
            </ul>
          </td>
          <td>
            <h2>{{ vegetables[4].name }}</h2>
            <ul>
              <li
                v-for="(item, index) in vegetables[4].items"
                :key="index"
                @click="navigateToPage"
              >
                {{ item }}
              </li>
            </ul>
          </td>
          <td>
            <h2>{{ vegetables[5].name }}</h2>
            <ul>
              <li
                v-for="(item, index) in vegetables[5].items"
                :key="index"
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

<script>
export default {
  props: ['vegetables'],
  methods: {
    navigateToPage() {
      window.location.href = 'https://www.cnhnb.com/supply/';
    },
  },
};
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
  cursor: pointer; /* 改变鼠标指针形状 */
  transition: color 0.3s ease; /* 平滑过渡 */
  padding: 0 5px 0px;
}

.vegetable-categories li:hover {
  color: #63b555; /* 鼠标悬停时改变字体颜色 */
}
</style>
