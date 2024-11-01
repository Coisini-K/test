import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

const useMainStore = defineStore('main', () => {
  const count = ref(0);
  const user = ref(null);
  const cartItems = ref([]);
  const isLoggedIn = computed(() => !!user.value);
  const cartItemCount = computed(() => cartItems.value.length);
  const orders = ref([]);

  //声明电梯导航栏数组
  const bar = ref([]);
  //设置数组函数
  const setBar = (arr) => {
    bar.value = arr;
  };
  //清空数组方法
  const clearBar = () => {
    bar.value = [];
  };



  const increment = () => {
    count.value++;
  };

  const decrement = () => {
    if (count.value > 0) {
      count.value--;
    }
  };

  const setUser = (newUser) => {
    user.value = newUser;
  };

  const addCartItem = (item) => {
    cartItems.value.push(item);
  };

  const removeCartItem = (index) => {
    if (index >= 0 && index < cartItems.value.length) {
      cartItems.value.splice(index, 1);
    }
  };

  const clearCart = () => {
    cartItems.value = [];
  };

  const addOrder = (order) => {
    orders.value.push(order);
  };

  const removeOrder = (index) => {
    if (index >= 0 && index < orders.value.length) {
      orders.value.splice(index, 1);
    }
  };

  const clearOrders = () => {
    orders.value = [];
  };

  const logout = () => {
    setUser(null);
    clearOrders();
    clearCart();
  };

  return {
    bar,
    setBar,
    clearBar,

    count,
    user,
    cartItems,
    isLoggedIn,
    cartItemCount,
    orders,
    increment,
    decrement,
    setUser,
    addCartItem,
    removeCartItem,
    clearCart,
    addOrder,
    removeOrder,
    clearOrders,
    logout,
  };
});

export default useMainStore;
