import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      meta: {
          title: "二手交易网"
      },
      component: resolve =>
                require(["../containers/Index/Index.vue"], resolve)
    },
    {
      path: '/Index/Sell',
      name: 'sell',
      meta: {
          title: "产品信息"
      },
      component: resolve =>
                require(["../containers/Index/Sell.vue"], resolve)
    },
    {
      path: '/Index/Address',
      name: 'address',
      meta: {
          title: "我的位置"
      },
      component: resolve =>
                require(["../containers/User/Address.vue"], resolve)
    }
  ]
})
router.afterEach(route => {
    let title = route.meta.title
    document.title = title
})
export default router
