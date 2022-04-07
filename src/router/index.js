import Main from '../Pages/Main'
import Auth from '../Pages/Auth'
import Shop from '../Pages/Shop'
import PageNotFound from '../Pages/PageNotFound'

import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', component: Main },
  { path: '/auth', component: Auth },
  { path: '/shop', component: Shop },
  { path: '/:pathMatch(.*)', component: PageNotFound },
 
]

const router = createRouter({

  history: createWebHistory(),
  routes,
})

export default router