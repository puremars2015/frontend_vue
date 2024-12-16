import { createRouter, createWebHistory } from "vue-router";
import Login from "@/components/Login.vue";
import MainPage from "@/components/MainPage.vue";


const routes = [
    {
        path: "/",
        name: "Login",
        component: Login,
    },
    {
        path: "/main-page",
        name: "MainPage",
        component: MainPage,
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;