import {createRouter, createWebHistory} from 'vue-router'
import AuthHandler from './components/AuthHandler.vue'


const history = createWebHistory()

const router = createRouter({
  history,
  routes: [
    {
      path: '/oauth2/callback',
      component: AuthHandler
    },
  ]
})

export default router;