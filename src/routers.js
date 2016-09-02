export default (router) => {
	router.map({
		'/': {
			name: 'home',
			component (reslove) {
				return require(['./views/home.vue'],reslove);
			}
		},
		
		/*# 改装秀模块 #*/
		'/refit': {
			name: 'refit',
			component (reslove) {
				return require(['./views/refit.vue'],reslove);
			}
		},
		
		/*# 购物车模块 #*/
		//购物车
		'/spcart': {
			name: 'spcart',
			component (reslove) {
				return require(['./views/spcart.vue'],reslove);
			}
		},
		//确认订单
		'/confirmOrder': {
			name: 'confirmOrder',
			component (reslove) {
				return require(['./views/confirmOrder.vue'],reslove);
			}
		}
	})
}
