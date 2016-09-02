<style lang="sass">
	.header .dele{
		background: url(../img/shopping/trash@2x.png) no-repeat;
		background-size: 100%;
	}
	
	.main{
		padding-top: 44px;
		padding-bottom: 49px;
	}
	
	.orderBox .orderList{
		border-top: 1px solid #D2D2D2;
		border-bottom: 1px solid #D2D2D2;
		margin-bottom: .26rem;
		padding: .26rem;
		padding-left: 0;
		background-color: #FFFFFF;
	}
	.orderList .checkStatu{
		height: 1.82rem;
	}
	.orderList .checkStatu input{
		width: .84rem;
		height: .84rem;
		margin-top: .49rem;
		background: url(../img/shopping/unCheck@2x.png) no-repeat;
		background-size: 100%;
	}
	.orderList .checkStatu input:checked{
		background: url(../img/shopping/check@2x.png) no-repeat;
		background-size: 100%;
	}
	.orderDescribe .imgBox{
		width: 1.82rem;
		height: 1.82rem;
		margin-right: .26rem;
	}
	.orderDescribe .imgBox img{
		width: 100%;
		height: 100%;
	}
	.testBox h2{
		font-size: .28rem;
		margin-bottom: .2rem;
	}
	.testBox p{
		color: #c9c9c9;
		font-size: .24rem;
		margin-bottom: .24rem;
	}
	.numBox{
		line-height: .42rem;
		height: .42rem;
	}
	.numBox span{
		color: #f24724;
	}
	.numBox .btn{
		width: 1.8rem;
		height: 100%;
		border: 1px solid #D2D2D2;
		box-sizing: border-box;
	}
	.numBox .btn a{
		height: 100%;
		width: .6rem;
		box-sizing: border-box;
	}
	.numBox .btn .reduce{
		border-right: 1px solid #D2D2D2;
		background: url(../img/shopping/minus_n@2x.png) no-repeat;
		background-size: 100%;
	}
	.numBox .btn .add{
		border-left: 1px solid #D2D2D2;
		background: url(../img/shopping/add@2x.png) no-repeat;
		background-size: 100%;
	}
	.numBox .btn input{
		width: .6rem;
		height: .4rem;
		line-height: .4rem;
		text-align: center;
	}
	
	.footer{
		border-top: 1px solid #D2D2D2;
		height: 49px;
	}
	.footer .allChend{
		height: 100%;
	}
	.allChend .box{
		height: 100%;
		margin-right: .24rem;
	}
	.allChend .box label{
		display: inline-block;
		height: 49px;
	}
	.allChend .box label input{
		width: 42px;
		height: 49px;
		background: url(../img/shopping/unCheck@2x.png) no-repeat;
		background-size: 42px;
		background-position: left center;
		float: left;
	}
	.allChend .box label input:checked{
		background: url(../img/shopping/check@2x.png) no-repeat;
		background-size: 42px;
		background-position: left center;
	}
	.allChend .box label span{
		line-height: 49px;
		float: left;
		font-size: 14px;
	}
	
	.totalBox{
		text-align: left;
		height: 100%;
	}
	.totalBox .total{
		margin-top: 10px;
		font-size: 14px;
	}
	.totalBox .null{
		color: #afafaf;
		font-size: 8px;
	}
	
	.footer .settlementBtn{
		width: 2.7rem;
		height: 100%;
		line-height: 49px;
		background-color: #f24724;
		text-align: center;
		color: #FFFFFF;
		font-size: 16px;
	}

</style>

<template>
	<section class="app gray">

		<head-min :head-title="headTitle" :right-class="headRightIcon"></head-min>

		<main class="main">
			<ul class="orderBox">
				<li class="orderList flex" v-for="item in spcartBase">
					<section class="flex-box-0 checkStatu">
						<input type="checkbox" v-model="item.statu" @change="changeFun($index, item)" />
					</section>
					<section class="flex-box-1 orderDescribe flex">
						<section class="imgBox flex-box-0">
							<img :src="item.img" />
						</section>
						<section class="testBox flex-box-1">
							<h2>{{item.title}}</h2>
							<p>{{item.type}}</p>
							<section class="clear numBox">
								<span class="fl">￥{{ item.pirce.toFixed(2) }}</span>
								<div class="btn fr flex">
									<a class="reduce" v-touch:tap="reduce($index, item)"></a>
									<input type="text" v-model="item.amount" />
									<a class="add" v-touch:tap="add($index, item)"></a>
								</div>
							</section>
						</section>
					</section>
				</li>
			</ul>
		</main>
		
		<footer class="footer flex">
			<section class="flex-box-1 allChend flex">
				<section class="box flex-box-0">
					<label><input type="checkbox" v-model="allChange" @change="allChangeFun()" /><span>全选</span></label>
				</section>
				<section class="flex-box-1 totalBox">
					<p class="total">合计：￥{{ total.toFixed(2) }}</p>
					<p class="null">不含运费/工时费</p>
				</section>
			</section>
			<a class="flex-box-0 settlementBtn" v-touch:tap="settlement()">结算</a>
		</footer>

	</section>
</template>

<script>
	//组件模块
	import HeadMin from '../components/header.vue'

	export default {
		data() {
			return {
				headTitle: '购物车',
				headRightIcon: 'dele',
				transType: 'fade',
				spcartBase: [{
					statu: false,
					img: 'https://gd2.alicdn.com/bao/uploaded/i2/1650720219/TB2VHO0oFXXXXXIXXXXXXXXXXXX_!!1650720219.jpg_400x400.jpg',
					title: '仙人指路 明镜 7737 智能安全行车系统 安全无忧看遍全世界',
					type: '黑色',
					pirce: 2700.07,
					amount: 1,
					maxAmount: 5
				}, {
					statu: false,
					img: 'https://gd2.alicdn.com/bao/uploaded/i2/1650720219/TB2VHO0oFXXXXXIXXXXXXXXXXXX_!!1650720219.jpg_400x400.jpg',
					title: '摩托车 鬼火 自动挡',
					type: '黄色',
					pirce: 4000.65,
					amount: 2,
					maxAmount: 10
				}, {
					statu: false,
					img: 'https://gd2.alicdn.com/bao/uploaded/i2/1650720219/TB2VHO0oFXXXXXIXXXXXXXXXXXX_!!1650720219.jpg_400x400.jpg',
					title: '摩托车 鬼火 自动挡',
					type: '蓝色',
					pirce: 2500.42,
					amount: 1,
					maxAmount: 10
				}, {
					statu: false,
					img: 'https://gd2.alicdn.com/bao/uploaded/i2/1650720219/TB2VHO0oFXXXXXIXXXXXXXXXXXX_!!1650720219.jpg_400x400.jpg',
					title: '摩托车 鬼火 自动挡',
					type: '黑白色',
					pirce: 3600.31,
					amount: 3,
					maxAmount: 10
				}],
				allChange: false,
				total: 0
			}
		},
		methods: {
			//减少数量
			reduce (index, item) {
				if(item.amount <= 1) return item.amount = 1;
				item.amount -= 1;
				
				if(!item.statu) return;
				this.total -= item.pirce;
			},
			
			//添加数量
			add (index, item) {
				if(item.amount >= item.maxAmount ) return item.amount = item.maxAmount;
				item.amount += 1;
				
				if(!item.statu) return;
				this.total += item.pirce;
			},
			
			//结算
			settlement () {
				this.$route.router.go('/confirmOrder');
			},
			
			//全选
			allChangeFun () {
				let num = 0;
				if(!this.allChange) {
					this.total = 0;
					for(let i=0; i<this.spcartBase.length; i++){
						this.spcartBase[i].statu = false;
					}
				}else {
					this.total = 0;
					for(let i=0; i<this.spcartBase.length; i++){
						this.spcartBase[i].statu = true;
						num += this.spcartBase[i].pirce * this.spcartBase[i].amount;
					}
					this.total = num;
				};
			},
			
			//单选
			changeFun (index, item) {
				if(!item.statu){
					this.total -= item.pirce * item.amount;
				}else{
					this.total += item.pirce * item.amount;
				}
				
				for(let i=0; i<this.spcartBase.length; i++){
					if(this.spcartBase[i].statu){
						this.allChange = true;
					}else{
						return this.allChange = false;
					}
				}
			}
		},
		ready () {
			//jsop 跨域请求 
			this.$http.jsonp('http://192.168.6.139:8087/Hand/DictHandler.ashx',{
				params: {
					cmd: 'dictlist',
					page: 1
				}
			}).then( (res) => {
	          console.log(res.data);
	        });
	        //console.log(this.$children[0].headTitle);
		},
		events: {
			//路由跳转
			'routerGo' () {
				this.$route.router.go('/');
			},
			
			//删除订单
			'rightClick' () {
				for (let i = this.spcartBase.length-1; i>=0; i--)  {
					if(this.spcartBase[i].statu){
						this.spcartBase.splice(i, 1);
					}
				}
				this.total = 0;
				this.allChange = false;
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