import { createWebHistory, createRouter } from "vue-router";

import store                from "@/store";
/* Auth Components */
import Login                from '@/components/auth/Login';
import LoginRoot            from '@/components/auth/Login';
import Register             from '@/components/auth/Register';
/* Header, Sidebar & Footer Component */
import Header               from '@/components/share/Header';
import Sidebar               from '@/components/share/Sidebar';
import Footer               from '@/components/share/Footer';
/* All page Components */
import Dashboard            from '@/components/Dashboard';
import Users            from '@/components/Users';

const routes = [
    {
        path: "/",
        name: "LoginRoot",
        component: LoginRoot,
        meta: {title: 'Login'}
    },
    {
        path: "/login",
        name: "Login",
        component: Login,
        meta: {title: 'Login'}
    },
    {
        path: "/register",
        name: "Register",
        component: Register,
        meta: {title: 'Register'}
    },
    {
        path: "/dashboard",
        name: "Dashboard",
        components: {'default': Dashboard, 'header': Header, 'sidebar': Sidebar, 'footer': Footer},
        meta: {requiresAuth: true, title: 'Dashboard'}
    },
    {
        path: "/users",
        name: "Users",
        components: {'default': Users, 'header': Header, 'sidebar': Sidebar, 'footer': Footer},
        meta: {requiresAuth: true, title: 'Users'}
    },
    /*{
        path: "/:catchAll(.*)",
        name: "NotFound",
        component: NotFound,
        meta: {title: '404 Not Found'}
    }*/
];

const router = createRouter({
    history: createWebHistory(),
    routes,
   /* scrollBehavior() {
        document.getElementById('mainBody').scrollIntoView({ behavior: 'smooth', block: 'start' });
    },*/
});

router.beforeEach((toRoute, fromRoute, next) => {
    window.document.title = toRoute.meta && toRoute.meta.title ? "RashRon | " + toRoute.meta.title : 'Login';
    if (toRoute.matched.some(record => record.meta.requiresAuth)) {
        if (store.getters.isLoggedIn === false) {
            next({
                path: '/login',
            })
        } else {
            next()
        }
    } else {
        next()
    }
});

export default router;
