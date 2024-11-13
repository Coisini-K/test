<template>
    <div class="box">
        <div class="login-container">
            <div class="btn_box">
                <button
                    type="button"
                    id="back_btn"
                    class="btn_top"
                    @click="goBack"
                >
                    &#60;
                </button>
                <button
                    type="button"
                    id="logout_btn"
                    class="btn_top"
                    @click="logout"
                >
                    注销
                </button>
            </div>
            <h2>登录</h2>
            <form @submit.prevent="handleLogin">
                <div class="form-group">
                    <label for="username">用户名:</label>
                    <input
                        type="text"
                        id="username"
                        v-model="username"
                        required
                    />
                </div>
                <div class="form-group">
                    <label for="password">密码:</label>
                    <input
                        type="password"
                        id="password"
                        v-model="password"
                        required
                    />
                </div>
                <div v-if="errorMessage" class="error-message">
                    {{ errorMessage }}
                </div>
                <div class="btn_box">
                    <button type="reset" class="btn">重置</button>
                    <button type="submit" class="btn">登录</button>
                </div>
            </form>
            <div v-if="showCountdown" class="countdown">
                <p>
                    登录成功,将在
                    <span>
                        {{ countdown }}
                    </span>
                    秒后自动跳转...
                </p>
                <p>
                    如果未自动跳转, 请<a
                        href="#"
                        @click.prevent="manualRedirect"
                        >点击这里</a
                    >跳转。
                </p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import useMainStore from '@/stores';
const mainStore = useMainStore();

// 定义响应式数据
const username = ref('');
const password = ref('');
const errorMessage = ref('');
const showCountdown = ref(false);
const countdown = ref(5);

// 获取路由器实例
const router = useRouter();

// 返回按钮
const goBack = () => {
    router.back();
};

// 处理登录逻辑
const handleLogin = async () => {
    try {
        // 定义正则表达式
        const usernameRegex = /^[a-zA-Z0-9_]{6,}$/;
        const passwordRegex = /^[a-zA-Z0-9.]{6,}$/;

        // 验证用户名和密码
        if (!usernameRegex.test(username.value)) {
            errorMessage.value =
                '用户名必须至少6个字符长, 可以包含字母、数字和下划线_。';
            return;
        }

        if (!passwordRegex.test(password.value)) {
            errorMessage.value =
                '密码必须至少6个字符长, 可以包含字母、数字和小数点.。';
            return;
        }

        // 模拟登录请求
        if (username.value.length > 0 && password.value.length > 0) {
            setUser();
            // 登录成功，显示倒计时
            errorMessage.value = '';
            showCountdown.value = true;
            startCountdown();
        } else {
            // 登录失败，显示错误信息
            errorMessage.value = '无效的用户名或密码';
        }
    } catch (error) {
        errorMessage.value = '登录过程中发生错误: ' + error.message;
    }
};

// 开始倒计时
const startCountdown = () => {
    const intervalId = setInterval(() => {
        countdown.value--;
        if (countdown.value <= 0) {
            clearInterval(intervalId);
            router.push('/');
        }
    }, 1000);
};

// 手动跳转
const manualRedirect = () => {
    router.push('/');
};

// 定义设置用户信息的函数
function setUser() {
    mainStore.setUser({ name: username.value });
    // console.log('is: ', mainStore.isLoggedIn);
    // console.log("bar:", mainStore.bar);
}

// 定义注销函数
function logout() {
    mainStore.logout();
    errorMessage.value = '已退出账号';
    // console.log('is: ', mainStore.isLoggedIn);
}
</script>

<style scoped>
.box {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f8f9fa;
}

.btn_box {
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.btn_top {
    font-size: 18px;
    cursor: pointer;
    border: none;
    color: #4be350;
    background-color: transparent;
}

.login-container {
    width: 300px;
    min-height: 420px;
    padding: 20px;
    border-radius: 5px;
    background-color: #fff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

h2 {
    text-align: center;
    margin-bottom: 20px;
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
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
}

.btn {
    width: 72px;
    padding: 10px;
    background-color: #4be350;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 10px;
}

.btn:hover {
    background-color: #25be2a;
}

.error-message {
    color: red;
    margin-top: 10px;
}

.countdown {
    font-size: 14px;
    margin-top: 20px;
    text-align: center;
}

.countdown p {
    margin: 5px 0;
}

.countdown span {
    color: #4be350;
}

.countdown a {
    color: #4be350;
    cursor: pointer;
    text-decoration: underline;
}
</style>
