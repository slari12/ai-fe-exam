import { createRouter, createWebHistory } from "vue-router";
import LoginView from "@/views/LoginView.vue";
import WriterDashboard from "@/views/writer-dashboard/WriterDashboard.vue";
import CreateArticle from "@/views/writer-dashboard/CreateArticle.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "login",
      component: LoginView,
    },
    {
      path: "/create-article",
      name: "CreateArticle",
      component: CreateArticle,
    },
    {
      path: "/writer-dashboard",
      name: "WriterDashboard",
      component: WriterDashboard,
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/AboutView.vue"),
    },
  ],
});

export default router;
