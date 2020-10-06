import Vue from "vue";
import VueRouter from "vue-router";
import Router from "vue-router";

Vue.use(Router);

export default new VueRouter({
    mode: 'history',
    routes: [{
        path: '/',
        redirect: '/goods'
    }, {
        path: '/goods',
        name: "Goods",
        component: () =>
            import ("../views/goods/index")
    }, {
        path: '/rating',
        name: "Rating",
        component: () =>
            import ("../views/rating/index")
    }, {
        path: '/seller',
        name: "Seller",
        component: () =>
            import ("../views/seller/index")
    }],
    linkActiveClass: "active",
})