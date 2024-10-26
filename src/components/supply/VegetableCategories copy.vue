<template>
  <div class="vegetable-categories">
    <h1>蔬菜</h1>
    <table>
      <tbody>
        <tr>
          <td>
            <h2>{{ vegetables[0].name }}</h2>
            <ul>
              <li
                v-for="(item, index) in vegetables[0].items"
                :key="index"
                @click="navigateToPage(item)"
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
                @click="navigateToPage(item)"
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
                @click="navigateToPage(item)"
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
                @click="navigateToPage(item)"
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
                @click="navigateToPage(item)"
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
                @click="navigateToPage(item)"
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
    navigateToPage(item) {
      window.location.href = `https://www.cnhnb.com/supply/${encodeURIComponent(item)}`;
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
  height: 50px;
  font-size: 1.7em;
  font-weight: bold;
}

.vegetable-categories table {
  width: 100%;
  height: 300px;
  border-collapse: collapse;
  background-color: #ffffff;
  box-shadow: 2px 2px 5px 0 rgba(0, 0, 0, 0.2);
}

.vegetable-categories tbody {
  display: flex;
  flex-wrap: wrap;
}

.vegetable-categories tr {
  display: flex;
  flex-wrap: wrap;
}

.vegetable-categories td {
  vertical-align: top;
  width: 16.6666666667%;
  /* 100% / 6 td elements */
}

.vegetable-categories h2 {
  font-size: 1.2em;
  font-weight: bold;
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
  font-size: 0.9em;
  line-height: 1em;
  margin-bottom: 1.5px;
  cursor: pointer;
  transition: color 0.3s ease;
  padding: 0 5px 0px;
}

.vegetable-categories li:hover {
  color: #63b555;
}
</style>
