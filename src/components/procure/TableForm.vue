<template>
    <div class="table-form">
        <div>
            <form class="demo-form-inline">
                <div class="form-item">
                    <label>收货地区:</label>
                    <select v-model="item" @change="query" size="1">
                        <option value="">不限地区</option>
                        <option
                            v-for="option in options"
                            :key="option.id"
                            :value="option.city"
                        >
                            {{ option.city }}
                        </option>
                    </select>
                </div>
                <div class="form-item">
                    <input type="checkbox" v-model="checked1" />
                    <label>最近7天发布</label>
                </div>
                <div class="form-item">
                    <input type="checkbox" v-model="checked2" />
                    <label>最近30天发布</label>
                </div>
            </form>
        </div>
        <div class="table-box">
            <table class="custom-table" style="width: 100%">
                <thead>
                    <tr>
                        <th>采购品种</th>
                        <th>采购量</th>
                        <th>收货地</th>
                        <th>采购方</th>
                        <th>更新时间</th>
                        <th>采购等级</th>
                        <th>操作</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="entity in entities" :key="entity.id">
                        <td>{{ entity.kName }}</td>
                        <td>{{ entity.amount }}</td>
                        <td>{{ entity.receipt }}</td>
                        <td>{{ entity.buyer }}</td>
                        <td>{{ entity.updateTime }}</td>
                        <td>{{ entity.level }}</td>
                        <td>
                            <button class="success-btn" @click="handle(entity)">
                                去报价抢单
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="pagination">
            <button
                @click="handleCurrentChange(pageNumber - 1)"
                :disabled="pageNumber <= 1"
            >
                上一页
            </button>
            <span>第 {{ pageNumber }} 页</span>
            <button
                @click="handleCurrentChange(pageNumber + 1)"
                :disabled="pageNumber >= totalPages"
            >
                下一页
            </button>
            <span>共 {{ totalPages }} 页</span>
            <input
                type="number"
                v-model.number="jumpPage"
                min="1"
                max="totalPages"
            />
            <button @click="handleCurrentChange(jumpPage)">跳转</button>
        </div>
    </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import axios from 'axios';

import { BASE_URL } from '@/constants/routes';

const pageNumber = ref(1);
const pageSize = ref(10);
const total = ref(0);
const entities = ref([]);
const checked1 = ref(false);
const checked2 = ref(false);
// const fixed = ref('auto');
const jumpPage = ref(1);

const handleCurrentChange = (val) => {
    if (val >= 1 && val <= totalPages.value) {
        pageNumber.value = val;
        query();
    }
};

const query = async () => {
    try {
        const params = item.value ? item.value : '';
        const response = await axios.get(
            `${BASE_URL}/purchase/query/${pageNumber.value}/${pageSize.value}`,
            {
                params: { params: params },
            }
        );
        entities.value = response.data.data.list;
        total.value = response.data.data.total;
        pageNumber.value = response.data.data.pageNum;
    } catch (error) {
        console.log(`警告: ${error.message}`);
    }
};

const item = ref('');
const options = ref([]);

const list = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/city/list`);
        options.value = response.data.data.map((city) => ({
            id: city.id,
            city: city.city,
        }));
    } catch (error) {
        console.log(`警告: ${error.message}`);
    }
};

onMounted(() => {
    query();
    list();
});

const handle = (row) => {
    // 处理点击事件
    console.log('去报价抢单', row);
};

const totalPages = computed(() => Math.ceil(total.value / pageSize.value));
</script>

<style scoped>
.table-form {
    width: 100%;
    height: 100%;
    padding: 10px 20px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 10px;
}

.demo-form-inline {
    width: 100%;
    height: 30px;
    margin: 10px 0;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 15px;
}

.form-item {
    width: auto;
    height: 100%;
    display: flex;
    align-items: center;
    gap: 5px;
}

.form-item select {
    width: 180px;
    height: 100%;
    /* max-height: 100px; */
    /* 设置最大高度 */
    /* overflow-y: auto; */
    /* 启用垂直滚动条 */
}

.table-box {
    width: 100%;
    max-height: 550px;
}

.custom-table {
    border-collapse: collapse;
    width: 100%;
}

.custom-table th,
.custom-table td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
}

.custom-table th {
    background-color: #f2f2f2;
}

.success-btn {
    background-color: #39bf3e;
    color: white;
    border: none;
    padding: 5px 10px;
    cursor: pointer;
}

.pagination {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-top: 10px;
}

.pagination button {
    background-color: #007bff;
    color: white;
    border: none;
    padding: 5px 10px;
    cursor: pointer;
}

.pagination input {
    width: 50px;
    padding: 5px;
    text-align: center;
}

.pagination span {
    margin: 0 5px;
}
</style>
