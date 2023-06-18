import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import "@/assets/bootstrap.min.css"
import "@/assets/style.css"
import { loadFonts } from './plugins/webfontloader'
import router from './vueRouter'
import NavbarPageVue from './navbar/NavbarPage.vue'
import store from './vuexStore'

loadFonts()

const app =createApp(App)
app.use(router)
app.use(store)
app.component('navbarPageVue', NavbarPageVue )
app.use(vuetify)
app.mount('#app')
