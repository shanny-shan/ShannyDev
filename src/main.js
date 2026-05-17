import { ref } from 'vue'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from '@/App.vue'
import ElementPlus from 'element-plus'

import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/dark/css-vars.css'
import '@/assets/css/style.scss'
import '@/assets/css/light.scss'
import '@/assets/css/dark.scss'
import '@/assets/css/scrollbar.scss'

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.use(ElementPlus)

app.mount('#app')
