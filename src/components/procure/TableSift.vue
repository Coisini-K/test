<template>
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
</template>

<script setup>
import { ref, onMounted, defineEmits, defineProps, watch } from 'vue';
import axios from 'axios';

import { BASE_URL } from '@/constants/routes';

const emit = defineEmits(['query']);
const props = defineProps({
    item: String,
    checked1: Boolean,
    checked2: Boolean,
    options: Array,
});

const item = ref(props.item);
const checked1 = ref(props.checked1);
const checked2 = ref(props.checked2);
const options = ref(props.options);

watch([item, checked1, checked2], () => {
    emit('query', {
        item: item.value,
        checked1: checked1.value,
        checked2: checked2.value,
    });
});

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
    list();
});
</script>

<style scoped>
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
}

option:hover {
    background-color: #39bf3e;
}
</style>
