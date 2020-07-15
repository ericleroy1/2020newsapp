import Vue from "vue";
import VueRouter from "vue-router";

import Home from "../views/Home.vue";
import SearchPage from "../views/SearchPage.vue";
import MyListPage from "../views/MyListPage";
import LoginPage from "../views/LoginPage";
import RegisterPage from "../views/RegisterPage";
import LogoutPage from "../views/LogoutPage";

import * as firebase from "firebase/app";
import "firebase/auth";

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
		component: MyListPage,
		meta: {auth: true}
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
  },
  {
    path: "/logout",
    name: "LogoutPage",
    component: LogoutPage
  }
];

const router = new VueRouter({
	routes
});

router.beforeEach((to, from, next)=>{
	const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
	const isAuthenticated = firebase.auth().currentUser;
	if(requiresAuth && !isAuthenticated){
		next("/login");
	} else {
		next();
	}
})


export default router;