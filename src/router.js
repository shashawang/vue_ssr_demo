import { createRouter } from 'vue-router'
// import MyUser from './components/MyUser.vue'

// const routes = [{ path: '/user', component: MyUser }]
const routes = [
  { path: '/user', component: () => import('./components/MyUser.vue') }
]
export default function (history) {
  return createRouter({
    history,
    routes
  })
}