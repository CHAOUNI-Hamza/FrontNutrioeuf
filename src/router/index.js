import { createRouter, createWebHistory } from 'vue-router'
import Accueil from '../components/Visitor/Accueil'
import Contact from '../components/Visitor/Contact'
import Recettes from '../components/Visitor/Recettes'
import Produits from '../components/Visitor/Produits'
import QuiSommesNous from '../components/Visitor/QuiSommesNous'

const routes = [
  {
    path: '/',
    name: 'Accueil',
    component: Accueil
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/recettes',
    name: 'Recettes',
    component: Recettes
  },
  {
    path: '/produits',
    name: 'Produits',
    component: Produits
  },
  {
    path: '/qui-sommes-nous',
    name: 'QuiSommesNous',
    component: QuiSommesNous
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
