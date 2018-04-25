import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import swiper from '@/components/swiper'
import good from '@/components/good'
import news from '@/components/news'
import contact from '@/components/contact'
import trip from '@/components/trip'
import backed from '@/components/backed'
import product from '@/components/product'
import login from '@/components/login'
import register from '@/components/register'
import order from '@/components/order'
import shopcar from '@/components/shopcar'
import edit from '@/components/editArticle'
import publish from '@/components/publishArticle'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
      children: [
        {
          path: '/',
          name: 'swiper',
          component: swiper
        },
        {
          path: '/swiper',
          name: 'swiper',
          component: swiper
        },
        {
          path: '/good',
          name: 'good',
          component: good
        },
        {
          path: '/trip',
          name: 'trip',
          component: trip
        },
        {
          path: '/news',
          name: 'news',
          component: news
        },
        {
          path: '/contact',
          name: 'contact',
          component: contact
        },
        {
          path: '/good/product',
          name: 'product',
          component: product
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/register',
      name: 'register',
      component: register
    },
    {
      path: '/order',
      name: 'order',
      component: order
    },
    {
      path: '/shopcar',
      name: 'shopcar',
      component: shopcar
    },
    {
      path: '/backed',
      name: 'backed',
      component: backed,
      children: [
        {
          path: '/',
          name: edit,
          component: edit
        },
        {
          path: '/backed/edit',
          name: edit,
          component: edit
        },
        {
          path: '/backed/publish',
          name: publish,
          component: publish
        }
      ]
    }
  ]
})
