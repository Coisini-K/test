<template>
	<div class="container">
		<h1>About</h1>

		<!-- 显示当前计数 -->
		<h1>计数: {{ mainStore.count }}</h1>

		<!-- 显示当前用户的姓名 -->
		<h1>用户: {{ mainStore.user?.name || '未登录' }}</h1>

		<!-- 显示用户是否登录 -->
		<h1>是否登录: {{ mainStore.isLoggedIn ? '已登录' : '未登录' }}</h1>

		<!-- 显示购物车中的商品数量 -->
		<h1>购物车商品数量: {{ mainStore.cartItems.length }}</h1>

		<!-- 列表展示购物车中的商品 -->
		<ul>
			<li v-for="(item, index) in mainStore.cartItems" :key="index">
				{{ item.name }} - {{ item.quantity }}
				<!-- 删除按钮 -->
				<button @click="removeCartItem(index)">删除</button>
			</li>
		</ul>

		<!-- 增加计数按钮 -->
		<button @click="incrementCount">增加计数</button>

		<!-- 减少计数按钮，当计数大于0时才允许减少 -->
		<button @click="decrementCount">减少计数</button>

		<!-- 设置用户信息按钮 -->
		<button @click="setUser">设置用户</button>

		<!-- 登出按钮 -->
		<button @click="logout">登出</button>

		<!-- 添加商品到购物车按钮 -->
		<button @click="addCartItem">添加商品到购物车</button>

		<!-- 清空购物车按钮 -->
		<button @click="clearCart">清空购物车</button>

		<!-- 添加订单按钮 -->
		<button @click="addOrder">添加订单</button>

		<!-- 清空所有订单按钮 -->
		<button @click="clearOrders">清空订单</button>

		<!-- 列表展示订单信息 -->
		<ul>
			<li v-for="(order, orderIndex) in mainStore.orders" :key="orderIndex">
				订单编号: {{ order.orderNumber }} - 商品数量:
				{{ order.items.length }}
				<!-- 删除订单按钮 -->
				<button @click="removeOrder(orderIndex)">删除</button>
			</li>
		</ul>
	</div>
</template>

<script setup>
import useMainStore from '@/stores'

const mainStore = useMainStore()

// 定义增加计数的函数
function incrementCount() {
	mainStore.increment()
}

// 定义减少计数的函数，当计数大于0时才允许减少
function decrementCount() {
	if (mainStore.count > 0) {
		mainStore.decrement()
	}
}

// 定义设置用户信息的函数
function setUser() {
	mainStore.setUser({ name: 'John Doe', email: 'john@example.com' })
}

// 定义登出用户的函数
function logout() {
	mainStore.logout()
}

// 定义向购物车中添加商品的函数
function addCartItem() {
	mainStore.addCartItem({ name: 'Product A', quantity: 1 })
}

// 定义从购物车中移除商品的函数
function removeCartItem(index) {
	mainStore.removeCartItem(index)
}

// 定义清空购物车的函数
function clearCart() {
	mainStore.clearCart()
}

// 定义添加订单的函数
function addOrder() {
	mainStore.addOrder({
		orderNumber: '12345',
		items: [{ name: 'Product B', quantity: 2 }],
	})
}

// 定义从订单列表中移除订单的函数
function removeOrder(index) {
	mainStore.removeOrder(index)
}

// 定义清空所有订单的函数
function clearOrders() {
	mainStore.clearOrders()
}
</script>

<style scoped>
/* 设置容器样式 */
.container {
	max-width: 800px;
	margin: 0 auto;
	padding: 20px;
	text-align: center;
}

/* 设置标题样式 */
h1 {
	margin-bottom: 10px;
}

/* 设置列表样式 */
ul {
	list-style-type: none;
	padding-left: 0;
	margin-bottom: 20px;
}

/* 设置列表项样式 */
li {
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 5px;
}

/* 设置按钮样式 */
button {
	background-color: #4caf50;
	border: none;
	color: white;
	padding: 10px 20px;
	text-align: center;
	text-decoration: none;
	display: inline-block;
	font-size: 16px;
	margin: 4px 2px;
	cursor: pointer;
	border-radius: 4px;
}

/* 设置按钮悬停效果 */
button:hover {
	background-color: #45a049;
}
</style>
