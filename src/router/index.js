import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/carPage',
        name: 'CarPage',
        component: () =>
            import ( /* webpackChunkName: "carPage" */ '../views/CarPage.vue')
    },
    {
        path: '/formPage',
        name: 'FormPage',
        component: () =>
            import ( /* webpackChunkName: "formPage" */ '../views/FormPage.vue')
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router