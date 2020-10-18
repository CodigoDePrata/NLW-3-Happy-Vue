import { createWebHistory, createRouter } from "vue-router";
import Landing from "@/pages/Landing";
import CreateOrphanage from "@/pages/CreateOrphanage";
import OrphanagesMap from "@/pages/OrphanagesMap";
import Orphanage from "@/pages/Orphanage";

const routes = [
  {
    path: "/",
    name: "home",
    component: Landing
  },
  {
    path: "/orphanages",
    name: "orphanages",
    component: OrphanagesMap
  },
  {
    path: "/orphanages/create",
    name: "createOrphanage",
    component: CreateOrphanage
  },
  {
    path: "/orphanages/:id",
    name: "orphanage",
    component: Orphanage
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
