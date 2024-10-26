// src/utils/axios.js
import axios from 'axios';

// 创建 axios 实例
//  使用 .env 文件设置环境变量
// const instance = axios.create({
//     // 在 Vue 3 中，环境变量可以通过 import.meta.env 访问。
//     baseURL: import.meta.env.VUE_APP_API_BASE_URL || 'http://localhost:3000/api',
//     timeout: 10000,
//     headers: {
//         'Content-Type': 'application/json',
//     },
// });

// 如果不想使用环境变量，可以直接定义一个常量：
const instance = axios.create({
  baseURL: 'http://localhost:3000/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// 请求拦截器
instance.interceptors.request.use(
  (config) => {
    // 在这里可以添加请求头等
    // 例如：添加 token 到请求头
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 响应拦截器
instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // 在这里处理错误响应，例如重新登录等
    return Promise.reject(error);
  }
);

export default instance;
