import { defineStore } from 'pinia';

const useMainStore = defineStore('main', {
    state: () => ({
        count: 0,
        user: null,
        cartItems: [],
        isLoggedIn: false,
        cartItemCount: 0,
        orders: [],
    }),

    getters: {
        getCount(state) {
            return state.count;
        },
        getUser(state) {
            return state.user;
        },
        getCartItems(state) {
            return state.cartItems;
        },
        getIsLoggedIn(state) {
            return state.isLoggedIn;
        },
        getCartItemCount(state) {
            return state.cartItems.length;
        },
        getOrders(state) {
            return state.orders;
        },
    },

    actions: {
        increment() {
            this.count++;
        },
        decrement() {
            if (this.count > 0) {
                this.count--;
            }
        },
        setUser(user) {
            this.user = user;
            this.isLoggedIn = !!user;
        },
        addCartItem(item) {
            this.cartItems.push(item);
        },
        removeCartItem(index) {
            if (index >= 0 && index < this.cartItems.length) {
                this.cartItems.splice(index, 1);
            }
        },
        clearCart() {
            this.cartItems = [];
        },
        addOrder(order) {
            this.orders.push(order);
        },
        removeOrder(index) {
            if (index >= 0 && index < this.orders.length) {
                this.orders.splice(index, 1);
            }
        },
        clearOrders() {
            this.orders = [];
        },
        logout() {
            this.setUser(null);
            this.orders = [];
            this.cartItems = [];
        },
    },
});

export default useMainStore;
