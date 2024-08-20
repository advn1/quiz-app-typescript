import { createWebHashHistory, createRouter } from "vue-router";
import Home from "./components/Home.vue";
import Quiz from "./components/Quiz.vue";
import NotFound from "./components/NotFound.vue";

const routes = [
    {path: '/home', component: Home},
    {path: '/quiz/:name', component: Quiz},
    {path: '/:pathMatch(.*)*', component: NotFound},
    {path: '/not-found', component: NotFound}
]

export const router = createRouter({
    history: createWebHashHistory(),
    routes,
})