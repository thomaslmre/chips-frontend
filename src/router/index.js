import { createRouter, createWebHistory } from 'vue-router';
import Menu from '../components/Menu.vue';
import Chercher from '../components/Chercher.vue';
import Inserer from '../components/Inserer.vue';

const routes = [
    {
        path: '/',
        name: 'Menu',
        component: Menu
    },
    {
        path: '/chercher',
        name: 'Chercher',
        component: Chercher
    },
    {
        path: '/Inserer',
        name: 'Inserer',
        component: Inserer
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;