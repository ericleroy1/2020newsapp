import Vue from "vue";
import VueRouter from "vue-router";

import Home from "../views/Home.vue";
import SearchPage from "../views/SearchPage.vue";
import MyListPage from "../views/MyListPage";
import LoginPage from "../views/LoginPage";
import RegisterPage from "../views/RegisterPage";

Vue.use(VueRouter);

const routes = [
	{
		path: "/",
		name: "Home",
		component: Home
	},
	{
		path: "/search",
		name: "SearchPage",
		component: SearchPage
	},
	{
		path: "/mylist",
		name: "MyListPage",
		component: MyListPage
	},
	{
		path: "/login",
		name: "LoginPage",
		component: LoginPage
	},
	{
		path: "/register",
		name: "RegisterPage",
		component: RegisterPage
	}
	// {
	//   path: '/about',
	//   name: 'About',
	//   // route level code-splitting
	//   // this generates a separate chunk (about.[hash].js) for this route
	//   // which is lazy-loaded when the route is visited.
	//   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
	// }
];

const router = new VueRouter({
	routes
});

export default router;