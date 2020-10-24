import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "@/views/Home.vue";
import OrphanagesMap from "@/views/OrphanagesMap.vue";
import Orphanage from "@/views/Orphanage.vue";
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
    name: "OrphanagesMap",
    component: OrphanagesMap,
  },
  {
    path: "/orphanages/create",
    name: "CreateOrphanage",
    component: CreateOrphanage,
  },
  {
    path: "/orphanages/:id",
    name: "OrphanageDetails",
    component: Orphanage,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
