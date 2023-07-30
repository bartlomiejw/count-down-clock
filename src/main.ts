import App from './App.vue'
import router from './router'
import '@/assets/scss/index.scss'
import 'virtual:svg-icons-register'
import svgIcon from '@/components/Icon/SvgIcon.vue'

const app = createApp(App)
const store = createPinia()


app.component('SvgIcon', svgIcon)
app.use(store)
app.use(router).mount('#app')

export { app, store }
