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
      path: '/Product/Info',
      name: 'productinfo',
      meta: {
          title: "产品详细信息"
      },
      component: resolve =>
                require(["../containers/Product/Info.vue"], resolve)
    },
    {
      path: '/Index/List',
      name: 'list',
      meta: {
          title: "产品列表信息"
      },
      component: resolve =>
                require(["../containers/Index/List.vue"], resolve)
    },
    {
      path: '/User/Address',
      name: 'address',
      meta: {
          title: "我的位置"
      },
      component: resolve =>
                require(["../containers/User/Address.vue"], resolve)
    },
    {
      path: '/User/Info',
      name: 'userinfo',
      meta: {
          title: "个人信息"
      },
      component: resolve =>
                require(["../containers/User/Info.vue"], resolve)
    },
    {
      path: '/User/Feedback',
      name: 'userfeedback',
      meta: {
          title: "我要反馈"
      },
      component: resolve =>
                require(["../containers/User/Feedback.vue"], resolve)
    },
    {
      path: '/User/Message',
      name: 'Message',
      meta: {
          title: "我的消息"
      },
      component: resolve =>
                require(["../containers/User/Message.vue"], resolve)
    },
    {
      path: '/User/Product',
      name: 'userproduct',
      meta: {
          title: "我的产品"
      },
      component: resolve =>
                require(["../containers/User/Product.vue"], resolve)
    }
  ]
})
router.afterEach(route => {
    let title = route.meta.title
    document.title = title
})
export default router
