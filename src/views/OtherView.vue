<!-- HomeView.vue -->
<template>
	<div>
		<h1>首页</h1>
		<!-- 主页内容 -->

		<!-- 显示当前计数 -->
		<h1>计数: {{ mainStore.count }}</h1>

		<HelloWorld />

		<i>
			<DocumentationIcon />
		</i>
		<i>
			<ToolingIcon />
		</i>
		<i>
			<EcosystemIcon />
		</i>
		<i>
			<CommunityIcon />
		</i>
		<i>
			<SupportIcon />
		</i>
	</div>
</template>

<script setup>
import DocumentationIcon from '@/components/icons/IconDocumentation.vue'
import ToolingIcon from '@/components/icons/IconTooling.vue'
import EcosystemIcon from '@/components/icons/IconEcosystem.vue'
import CommunityIcon from '@/components/icons/IconCommunity.vue'
import SupportIcon from '@/components/icons/IconSupport.vue'

import useMainStore from '@/stores'
import HelloWorld from '@/components/HelloWorld.vue'
const mainStore = useMainStore()
</script>

<style scoped>
i {
	margin: 10px;
}
</style>
