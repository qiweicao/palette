import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import NotFoundView from "@/views/404.vue";
import LoginView from "@/views/login.vue";
import Home from "@/components/HelloWorld.vue";
const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/login",
    component: LoginView,
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: NotFoundView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
