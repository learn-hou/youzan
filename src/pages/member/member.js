// 使用vue-router
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// 创建vue实例
let routes = [{
  path: '/',
  components: require('./components/member.vue')
},{
  path: '/address',
  components: require('./components/address.vue'),
  children: [{
    path: '',
    redirect: 'all'
  },{
    path: 'all',
    components: require('./components/all.vue')
  },{
    path: 'from',
    components: require('./components/from.vue')
  }]
}]
let router = new Router({
  routes
})

// 挂载
new Vue({
  el: '#app',
  router
})
