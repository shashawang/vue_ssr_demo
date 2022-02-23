import { createSSRApp } from 'vue'
import { createWebHistory } from 'vue-router'
import createRouter from './router.js'
import App from './App.vue'

// 针对客户端的启动逻辑......

const app = createSSRApp(App)
const router = createRouter(createWebHistory())

app.use(router)
// 这里假设 App.vue 模板的根元素有 `id="app"`.在客户端和服务端我们都需要等待路由器先解析异步路由组件以合理地调用组件内的钩子
router.isReady().then(() => {
  app.mount('#app')
})