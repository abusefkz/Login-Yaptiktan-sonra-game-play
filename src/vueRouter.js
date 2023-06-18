import { createRouter, createWebHashHistory } from "vue-router";
import homePage from "@/components/HelloWorld.vue"
import loginPage from "@/login/LoginPage.vue"
import registerPage from "./register/RegisterPage.vue";
import store from "./vuexStore";

const routes = [
    {
        name: 'homePage',
        path: '/',
        component: homePage
    },
    {
        name: 'loginPage',
        path: '/login',
        component: loginPage
    },
    {
        name: 'registerPage',
        path: '/register',
        component: registerPage
    }
]

const router = createRouter({
    routes,
    history: createWebHashHistory()
})
router.beforeEach((to,from,next) => {
    console.log('to :>> ', to);
    console.log('from :>> ', from);
    const _isAuthenticated = store.getters._isAuthenticated
    console.log('_is :>> ', _isAuthenticated);
    const homePage = (['homePage'])
    const loginPage = (['loginPage'])
    const registerPage = (['registerPage'])

    if(loginPage.indexOf(to.name) > -1){
        if(_isAuthenticated)next(false)
    }
    if(registerPage.indexOf(to.name) > -1){
        if(_isAuthenticated)next(false)
    }
    if(homePage.indexOf(to.name) > -1){
        if(_isAuthenticated) next()
        else next({name: 'loginPage'})
    }else{
        next()
    }
})

export default router;