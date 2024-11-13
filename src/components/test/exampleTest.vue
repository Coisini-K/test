<template>
    <div>
        <h1>{{ msg }}</h1>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { message } from '@/components/test/example';

const msg = ref(message);
</script>

<style scoped>
h1 {
    color: blue;
}
</style>
