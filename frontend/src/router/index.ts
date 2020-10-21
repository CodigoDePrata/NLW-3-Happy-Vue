import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "@/views/Home.vue";
import Orphanages from "@/views/Orphanages.vue";
import CreateOrphanage from "@/views/CreateOrphanage.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/orphanages",
    name: "Orphanages",
    component: Orphanages,
  },

  {
    path: "/orphanages/create",
    name: "CreateOrphanage",
    component: CreateOrphanage,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
