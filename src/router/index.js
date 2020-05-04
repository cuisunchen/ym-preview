import Vue from 'vue'
import Router from 'vue-router'
import questionPage from '@/components/questionPage'
import goodLuckPage from '@/components/goodLuckPage'

Vue.use(Router)
const routerPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error => error)
}

export default new Router({
  routes: [
    {
      path: '/',
      name: 'question',
      component: questionPage
    },
    {
      path: '/pre-goodLuck',
      name: 'pre-goodLuck',
      component: goodLuckPage
    }
  ]
})
