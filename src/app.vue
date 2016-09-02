<style lang="sass">
	.view{
		transition: all .3s ease;
	}
	
	/*enter 定义进入的开始状态*/
	.fade-enter{
		opacity: 1;
		transform: translate3d(100%,0,0);
	}
	/*leave 定义离开的结束状态*/
	.fade-leave{
		opacity: 0;
		transform: translate3d(0,0,0);
	}
	
	.refit-enter{
		opacity: 1;
		transform: translate3d(-100%,0,0);
	}
	.refit-leave{
		opacity: 0;
		transform: translate3d(0,0,0);
	}
	
	.wrap{
		width: 100%;
		height: 100%;
	}
</style>

<template>
	
	<section class="wrap">
		<router-view class="view" :transition="effect" transition-mode="out-in"></router-view>
	</section>
	
</template>

<script>
	
	export default {
		data () {
			return {
				//转场动画定义
				effect: ''
			}
		}
	}
	
</script>