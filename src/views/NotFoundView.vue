<template>
    <div class="not-found">
        <h1>404 Not Found</h1>
        <p>请您稍后再尝试访问。</p>
        <p>
            您将在
            <span>
                {{ countdown }}
            </span>
            秒后自动返回首页。
        </p>
        <RouterLink to="/">立即返回首页</RouterLink>
    </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { useRouter } from 'vue-router';
import { RouterLink } from 'vue-router';

const router = useRouter();
const countdown = ref(5);

let intervalId;

onMounted(() => {
    intervalId = setInterval(() => {
        countdown.value--;
        if (countdown.value <= 0) {
            clearInterval(intervalId);
            router.push('/');
        }
    }, 1000);
});

onBeforeUnmount(() => {
    clearInterval(intervalId);
});
</script>

<style scoped>
.not-found {
    width: 100%;
    height: 100%;
    text-align: center;
    margin-top: 50px;
}

h1 {
    font-size: 2em;
    color: #ff4d4d;
}

p {
    font-size: 1.2em;
    color: #666;
}

span {
    color: #4be350;
}

a {
    display: inline-block;
    margin-top: 20px;
    padding: 10px 20px;
    background-color: #4be350;
    color: white;
    border-radius: 5px;
}

a:hover {
    background-color: #25be2a;
}
</style>
