import { createRouter, createWebHistory } from "vue-router"
import Tracker from "../views/Tracker.vue"

const routes = [
    {
        path: '/',
        name: 'home',
        component: Tracker
    }
]

export const router = createRouter({
    history: createWebHistory(),
    routes
})