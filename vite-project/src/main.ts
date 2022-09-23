// main.ts
import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import ElementPlus from 'element-plus' // 引入element-plus
import 'element-plus/dist/index.css' // 引入element-plus的样式
import './mock'
const app = createApp(App)
app.use(router)
app.use(store)
app.use(ElementPlus) // use element-plus 
app.mount('#app')
