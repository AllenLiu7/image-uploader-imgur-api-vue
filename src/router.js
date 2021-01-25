import {createRouter, createWebHistory} from 'vue-router'
import AuthHandler from './components/AuthHandler.vue'
import UploadForm from './components/UploadForm.vue'
import ImageList from './components/ImageList.vue'

const history = createWebHistory()

const router = createRouter({
  history,
  routes: [
    {path: '/oauth2/callback',component: AuthHandler},
    {path: '/', component: ImageList},
    {path: '/upload', component: UploadForm}
  ]
})

export default router;