import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'homeView',
    component: HomeView
  },
  {
    path: '/cartas',
    name: 'cartaView',
    component: () => import(/* webpackChunkName: "carta" */ '../views/CartaView.vue')
  },
  {
    path: '/reservas',
    name: 'reservasView',
    component: () => import(/* webpackChunkName "reserva" */ '../views/ReservasView.vue')
  },
  {
    path: '/contact',
    name: 'contactView',
    component: () => import(/* webpackChunkName: "contact" */ '../views/ContactView.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
