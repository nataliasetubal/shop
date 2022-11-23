import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import axiosPlugin from './plugings/axios'

const app = createApp(App)
app.use(axiosPlugin)
app.use(store)
app.provide('axios', app.config.globalProperties.$axios)

app.mount('#app')