import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import(/* webpackChunkName: "dragging" */ './views/Dragging.vue')
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/dragAndDrop',
      name: 'dragAndDrop',
      component: () => import(/* webpackChunkName: "dragAndDrop" */ './views/DragAndDrop.vue')
    },
    {
      path: '/resizeable',
      name: 'resizeable',
      component: () => import(/* webpackChunkName: "resizeable" */ './views/Resizeable.vue')
    },
    {
      path: '/tapDoubleTapHold',
      name: 'tapDoubleTapHold',
      component: () => import(/* webpackChunkName: "tapDoubleTapHold" */ './views/TapDoubleTapHold.vue')
    },
    {
      path: '/snapping',
      name: 'snapping',
      component: () => import(/* webpackChunkName: "snapping" */ './views/Snapping.vue')
    },
    {
      path: '/hello',
      name: 'hello',
      component: () => import(/* webpackChunkName: "snapping" */ './views/Hello.vue')
    }
  ]
})
