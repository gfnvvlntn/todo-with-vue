import { createRouter, createWebHistory } from "vue-router";
import Notes from "../views/Notes.vue";

const routes = [
  {
    path: "/",
    name: "Notes",
    props: true,

    component: Notes,
  },
  {
    path: "/edit/:id",
    name: "Edit",
    props: true,
    component: () => import("../views/Edit.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
