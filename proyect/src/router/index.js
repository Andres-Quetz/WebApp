import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "*",
    redirect: "/",
  },
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/profile",
    name: "Profile",
    component: () => import("../views/Profile.vue"),
  },
  {
    path: "/private",
    name: "Private",
    component: () => import("../views/Private.vue"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/login",
    name: "LogIn",
    component: () => import("../views/LogIn.vue"),
  },
  {
    path: "/signup",
    name: "Signup", 
    component: () => import("../views/Signup.vue")
},
{
  path: "/settings",
  name: "Settings",
  component: () => import("../views/Settings.vue"),
},
{
  path: "/shop",
  name: "Shop",
  component: () => import("../views/Shop.vue"),
},
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some((x) => x.meta.requiresAuth);
  if (requiresAuth) {
    firebase.auth().onAuthStateChanged((user) => {
      if (!user) next("/");
      else next();
    });
  } else next();
});
export default router;
