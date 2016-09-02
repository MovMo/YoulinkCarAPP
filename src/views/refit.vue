<style lang="sass">
	.refit-content {
		padding: .26rem;
	}
	
	.refit-content .title {
		font-size: .44rem;
	}
	
	.refit-content .business-content {
		line-height: .68rem;
	}
	
	.refit-content .business-content span {
		display: inline-block;
		color: #B5B5B5;
		margin-right: .1rem;
	}
	
	.refit-content .test-con p {
		margin-bottom: .34rem;
	}
	
	.img-con li {
		margin-bottom: .24rem;
	}
	
	.img-con li,.img-con li img {
		width: 100%;
	}
</style>

<template>
	<section class="app">

		<head-min :head-title="headTitle" :right-class="headRightIcon"></head-min>

		<main class="main">
			<section class="refit-content">
				<h1 class="title">{{data.title}}</h1>
				<section class="business-content">
					<span>{{data.time}}</span>
					<span>{{data.business}}</span>
				</section>
				<ul class="test-con">
					<li v-for="item in data.textContent">{{{item}}}</li>
				</ul>
				<ul class="img-con">
					<li v-for="list in data.imgArr"><img :src="list" /></li>
				</ul>
			</section>
		</main>

	</section>
</template>

<script>
	//组件模块
	import HeadMin from '../components/header.vue'

	export default {
		data() {
			return {
				headTitle: '改装秀',
				headRightIcon: 'list',
				data: {
					title: '车载音响改装案例, 车载音响改装案例 车载音响改装案例',
					time: '2016-07-22',
					business: 'XXX 商家',
					textContent: [
						'<p>最近发表的那篇《谈汽车音响改装的三大误区｜匠心》在说客、公众号和微博上受到网友热议，所以我再次来到“老羊窝”道声，逮住老杨解读</p>',
						'<p>最近发表的那篇《谈汽车音响改装的三大误区｜匠心》在说客、公众号和微博上受到网友热议</p>',
						'<p>最近发表的那篇《谈汽车音响改装的三大误区｜匠心》在说客、公众号和微博上受到网友热议，所以我再次来到“老羊窝”道声</p>',
						'<p>最近发表的那篇《谈汽车音响改装的三大误区｜匠心》在说客</p>'
					],
					imgArr: [
						'http://b264.photo.store.qq.com/psb?/V14EMhnF2i5UPQ/z86KcvakPq7WFiRWv59tF7VucNY6oJgqjFAGaVK1l34!/b/dAgBAAAAAAAA&bo=AAWrBqsG5AgFB80!&rf=viewer_4',
						'http://b115.photo.store.qq.com/psb?/V14EMhnF2i5UPQ/b6Qcov7leVLv8SRj3iFIYnBSLzniGU8qtvsIYk.ptvg!/b/dHMAAAAAAAAA&bo=AAWrBqsG5AgFAMo!&rf=viewer_4'
					]
				},
				transType: 'fade'
			}
		},
		methods: {

		},
		events: {
			'routerGo' () {
				this.$route.router.go('/');
			},
			'rightClick' () {
				alert(1);
			}
		},
		route: {
			activate(transition) {
				this.$root.$set('effect', this.transType);
				transition.next();
			}
		},
		components: {
			HeadMin
		}
	}
</script>