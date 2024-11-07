<template>
    <div class="login-container">
        <h2>Login</h2>
        <!-- <h3>{{ mainStore.user?.name || '未登录' }}</h3> -->
        <!-- <h3>{{ mainStore.isLoggedIn ? '已登录' : '未登录' }}</h3> -->
        <form @submit.prevent="handleLogin">
            <div class="form-group">
                <label for="username">Username:</label>
                <input type="text" id="username" v-model="username" required />
            </div>
            <div class="form-group">
                <label for="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    v-model="password"
                    required
                />
            </div>
            <div class="form-group">
                <button type="submit">Login</button>
                <button type="button" @click="logout">Logout</button>
            </div>
            <div v-if="errorMessage" class="error-message">
                {{ errorMessage }}
            </div>
        </form>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import useMainStore from '@/stores';
const mainStore = useMainStore();

// 定义响应式数据
const username = ref('');
const password = ref('');
const errorMessage = ref('');

// 获取路由器实例
const router = useRouter();

// 处理登录逻辑
const handleLogin = async () => {
    try {
        // 模拟登录请求
        if (username.value === 'admin' && password.value === 'root') {
            // 登录成功，跳转到首页
            setUser();
            router.push('/');
        } else {
            // 登录失败，显示错误信息
            errorMessage.value = 'Invalid username or password';
        }
    } catch (error) {
        console.error('Login failed:', error);
        errorMessage.value = 'An error occurred during login';
    }
};

// 定义设置用户信息的函数
function setUser() {
    mainStore.setUser({ name: username.value });
    console.log('is: ', mainStore.isLoggedIn);
    // console.log("bar:", mainStore.bar);
}
// function logout() {
//     mainStore.logout();
//     console.log("is: ", mainStore.isLoggedIn);
// }

onMounted(() => {
    console.log('is: ', mainStore.isLoggedIn);
    // logout();
});
</script>

<style scoped>
.login-container {
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #f9f9f9;
}

.form-group {
    margin-bottom: 15px;
}

label {
    display: block;
    margin-bottom: 5px;
}

input {
    width: 100%;
    padding: 8px;
    box-sizing: border-box;
}

button {
    width: 100%;
    margin: 10px 0;
    padding: 10px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

button:hover {
    background-color: #0056b3;
}

.error-message {
    color: red;
    margin-top: 10px;
}
</style>
