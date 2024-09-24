import { createRouter, createWebHistory } from 'vue-router';
import Tracker from '../views/Tracker.vue';
import Login from '../views/Login.vue';
import Register from '../views/Register.vue';

const routes = [
	{
		path: '/',
		name: 'home',
		component: Tracker,
	},
	{
		path: '/login',
		name: 'login',
		component: Login,
	},
	{
		path: '/register',
		name: 'register',
		component: Register,
	},
];

export const router = createRouter({
	history: createWebHistory(),
	routes,
});
