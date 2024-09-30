import { createRouter, createWebHistory } from 'vue-router';
import Tracker from '../views/Tracker.vue';
import Login from '../views/Login.vue';
import Register from '../views/Register.vue';
import Profile from '../views/Profile.vue';

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
	{
		path: '/profile/create',
		name: 'createProfile',
		component: Profile,
	},
];

export const router = createRouter({
	history: createWebHistory(),
	routes,
	scrollBehavior(to, _from, savedPosition) {
		if (to.hash) {
			return {
				el: to.hash, // Scroll ke elemen yang sesuai dengan ID hash
				behavior: 'smooth', // Opsi animasi scroll
			};
		} else if (savedPosition) {
			return savedPosition;
		} else {
			return { top: 0 };
		}
	},
});
