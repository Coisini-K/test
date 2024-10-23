<template>
	<div class="home_main_overview">
		<CategoryList />
		<div class="home_main_overview_show">
			<CarouselComponent :slides="photos" :interval="3000" />
			<div class="home_main_overview_show_imgs">
				<img src="@/assets/images/carousel/4.jpg" alt="no!" />
				<img src="@/assets/images/carousel/2.jpg" alt="no!" />
			</div>
		</div>
		<UserInformation
			:userInfo="{
				avatar: '/src/assets/images/mine/doge.jpg',
				name: 'oh my rain',
			}"
		/>
	</div>
</template>

<script setup>
import CategoryList from '@/components/home/CategoryList.vue'
import CarouselComponent from '@/components/home/CarouselComponent.vue'
import UserInformation from '@/components/home/UserInformation.vue'

const photos = [
	'/src/assets/images/carousel/1.jpg',
	'/src/assets/images/carousel/3.jpg',
	'/src/assets/images/carousel/6.jpg',
]
</script>

<style scoped>
.home_main_overview {
	margin: 10px;
	width: 1200px;
	display: flex;
	flex-direction: row;
	align-content: center;
	justify-content: center;
}

.home_main_overview_show {
	width: 600px;
	display: flex;
	flex-direction: column;
	align-content: center;
	justify-content: center;
	margin: 0 15px;
}

.home_main_overview_show_imgs {
	width: 100%;
	margin-top: 20px;
	display: flex;
	flex-direction: row;
	align-content: center;
	justify-content: space-between;
}
.home_main_overview_show_imgs img {
	width: 48%;
	height: 200px;
	/* margin: auto; */
}
</style>
