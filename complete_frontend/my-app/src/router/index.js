import { createRouter, createWebHistory } from "vue-router";
import Login from "@/components/Login.vue";
import MainPage from "@/components/MainPage.vue";
import DrinksPage from "@/components/DrinksPage.vue";


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
    },
    {
        path: "/drinks-page",
        name: "DrinksPage",
        component: DrinksPage,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;