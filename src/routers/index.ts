import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Tracker from '../views/Tracker.vue';
import Login from '../views/Login.vue';
import Register from '../views/Register.vue';
import Profile from '../views/Profile.vue';

const routes: Array<RouteRecordRaw> = [
	{
		path: '/',
		name: 'home',
		component: Tracker,
		meta: {
			requiresAuth: true,
		},
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
				el: to.hash,
				behavior: 'smooth',
			};
		} else if (savedPosition) {
			return savedPosition;
		} else {
			return { top: 0 };
		}
	},
});

router.beforeEach((to, _from, next) => {
	const isAuthenticated = localStorage.getItem('token');
	if (to.matched.some((record) => record.meta.requiresAuth)) {
		if (!isAuthenticated) {
			next('/login');
		} else {
			next();
		}
	} else {
		next();
	}
});
