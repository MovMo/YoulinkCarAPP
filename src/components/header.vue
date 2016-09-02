<style lang="sass">
	
</style>

<template>
	<header class="header">
		<a class="header_icon fl return" v-touch:tap="backFun()"></a>
		<div class="header_title">{{headTitle}}</div>
		<a class="header_icon fr" :class="rightClass" v-touch:tap="rightFun()"></a>
	</header>
</template>

<script>
	export default {
		data () {
			return {
				
			}
		},
		methods: {
			backFun () {
				this.$dispatch('routerGo');
			},
			rightFun () {
				this.$dispatch('rightClick');
			}
		},
		props: ['headTitle', 'rightClass']
	}
</script>