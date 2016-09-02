<style lang="sass">
@import '../scss/confirmOrder.scss';
</style>

<template>
	<section class="app gray">

		<head-min :head-title="headTitle"></head-min>

		<main class="main">
			<section class="container">
				<section class="commodityBox flex">
					<section class="flex-box-0 imgBox">
						<img src="../img/shopping/image@2x.png" alt="" />
					</section>
					<section class="flex-box-1 testBox">
						<h4>仙人指路 明镜 7737 智能安全行车系统安全无 忧看遍全世界</h4>
						<p>黑色</p>
						<div class="clear">
							<span class="fl price">￥2700.00</span>
							<span class="fr">x1</span>
						</div>
					</section>
				</section>
			</section>
			<section class="container">
				<section class="mode">
					<p>支付方式</p>
				</section>
				<section class="List">
					<section class="funBox clear">
						<span class="fl">支付宝支付</span>
						<input type="radio" class="fr" name="zf" checked="true" />
					</section>
				</section>
				<section class="invoiceBox flex">
					<span class="flex-box-0">抬头发票</span>
					<div class="inpBox flex-box-1">
						<input type="text" placeholder="请填写单位名称" />
					</div>
				</section>
			</section>
			<section class="container">
				<section class="List">
					<h4 class="headTitle">配送方式</h4>
				</section>
				<section class="List">
					<section class="funBox clear">
						<span class="fl">上门安装</span>
						<input type="radio" class="fr" name="distribution" />
					</section>
					<section class="funBox clear">
						<span class="fl">普通快递</span>
						<input type="radio" class="fr" name="distribution" checked="true" />
					</section>
				</section>
				<section class="cityBox kuaidi">
					<section class="chooseBtn">
						<a class="btn">新建收货地址</a>
					</section>
					<section class="activeCity">
						<section class="head clear">
							<span class="fl">车主：Mov</span>
							<span class="fr">13836881688</span>
						</section>
						<section class="cityTest flex">
							<p class="flex-box-1">取车地址：广东省深圳市龙华新区观澜街道清祥路路1号 宝能科技园9座A栋4楼</p>
							<i class="flex-box-0"></i>
						</section>
					</section>
				</section>
				<ul class="comBox shangmen">
					<li class="clear store">
						<span class="fl">选择门店</span>
						<i class="fr"></i>
						<input type="text" disabled="disabled" placeholder="请选择门店" class="fr activeData" name="store" />
					</li>
					<li class="clear aboutTime">
						<span class="fl">预约时间</span>
						<i class="fr"></i>
						<input type="text" disabled="disabled" placeholder="请选择时间" class="fr activeData" name="" />
					</li>
					<li class="clear">
						<span class="fl">安装费用</span>
						<span class="fr">￥300.00</span>
					</li>
					<li class="storeInfo">
						<a class="btn">门店详情</a>
					</li>
				</ul>
			</section>
			<section class="container">
				<section class="youdou clear">
					<h4 class="fl">优豆</h4>
					<span class="fl">共1000优豆，满1000优豆可用</span>
					<i class="fr"></i>
				</section>
			</section>
			<section class="container shangmen">
				<ul class="comBox">
					<li class="clear chooseCarPag">
						<span class="fl">选择车辆</span>
						<i class="fr"></i>
						<input type="text" disabled="disabled" placeholder="请选择车辆" class="fr activeData" name="" />
					</li>
				</ul>
				<section class="Agreement">
					<section class="box clear">
						<span class="fl">同意安排上门取车<a>《取车协议》</a></span>
						<input type="checkbox" class="fr" checked="true" />
					</section>
				</section>
				<section class="cityBox">
					<section class="chooseBtn">
						<a class="btn">取车地址</a>
					</section>
					<section class="activeCity">
						<section class="head clear">
							<span class="fl">车主：Mov</span>
							<span class="fr">13836881688</span>
						</section>
						<section class="cityTest flex">
							<p class="flex-box-1">取车地址：广东省深圳市龙华新区观澜街道清祥路路1号 宝能科技园9座A栋4楼</p>
							<i class="flex-box-0"></i>
						</section>
					</section>
				</section>
			</section>
			<section class="container">
				<ul class="total padd">
					<li class="clear">
						<span class="fl">商品金额</span>
						<span class="fr">￥2700.00</span>
					</li>
					<li class="clear">
						<span class="fl">安装费</span>
						<span class="fr">￥300.00</span>
					</li>
					<li class="clear">
						<span class="fl">实付金额</span>
						<span class="fr">￥3000.00</span>
					</li>
				</ul>
			</section>
		</main>
		
		<footer class="footer flex">
			<p class="flex-box-1 allNun">合计：￥3070.00</p>
			<a class="flex-box-0 settlementBtn">结算</a>
		</footer>

	</section>
</template>

<script>
	//组件模块
	import HeadMin from '../components/header.vue'

	export default {
		data() {
			return {
				headTitle: '确认订单',
				transType: 'fade'
			}
		},
		methods: {
			
		},
		ready () {
			
		},
		events: {
			//路由跳转
			'routerGo' () {
				this.$route.router.go('/spcart');
			},
			
			'rightClick' () {
				
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