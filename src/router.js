import {createRouter, createWebHistory} from "vue-router";
import Home from './views/Home'
import Todos from './views/Todos'

const routes = [
    {
        path:'/todos',
        name: Todos,
        component:Todos
    },
    {
        path:'/',
        name: Home,
        component:Home
    }
]

const router = createRouter({
    history:createWebHistory(process.env.BASE_URL),
    routes
});
export default router;