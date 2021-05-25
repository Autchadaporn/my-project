import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Exersice01 from '../views/Exercise_01.vue'
import Exersice02 from '../views/Exercise_02.vue'
import Exersice03 from '../views/Exercise_03.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/exercise_01',
    name: 'exercise_01',
    component: Exersice01
  },
  {
    path: '/exercise_02',
    name: 'exercise_02',
    component: Exersice02
  },
  {
    path: '/exercise_03',
    name: 'exercise_03',
    component: Exersice03
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
