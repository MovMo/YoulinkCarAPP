<style lang="sass">
	.link_active{
		padding: 0 .26rem;
	}
	.link_active li{
		float: left;
		padding: .2rem .5rem;
		background-color: #90C31F;
		border-radius: .1rem;
		margin: .2rem .2rem 0 0;
	}
	.link_active li a{
		color: #FFFFFF;
	}
</style>

<template>
	<section class="app">
		<head-min></head-min>
		
		<main class="main">
			<ul class="link_active clear">
				<li v-for="item in routers"><a v-link="{name: item.linkName}">{{item.text}}</a></li>
			</ul>
		</main>
	</section>
</template>

<script>
	//组件模块
	import HeadMin from '../components/header.vue'

	export default {
		data () {
			return {
				routers: [{
					text: '改装秀',
					linkName: 'refit'
				}, {
					text: '购物车',
					linkName: 'spcart'
				}, {
					text: '确认订单',
					linkName: 'spcart'
				}],
				transType: 'refit'
			}
		},
		route: {
			activate (transition) {
				this.$root.$set('effect',this.transType);
				transition.next();
			}
		},
		components: {
			HeadMin
		}
	}
</script>