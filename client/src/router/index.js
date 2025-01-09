import { createRouter, createWebHistory } from "vue-router";
import LoginView from "@/views/LoginView.vue";
import WriterDashboard from "@/views/writer-dashboard/WriterDashboard.vue";
import CreateArticle from "@/views/writer-dashboard/CreateArticle.vue";
import ArticleDetail from "@/views/writer-dashboard/ArticleDetail.vue";
import EditArticle from "@/views/writer-dashboard/EditArticle.vue";

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
      path: "/article/:id",
      name: "ArticleDetail",
      component: ArticleDetail,
    },
    {
      path: "/edit/:id",
      name: "EditArticle",
      component: EditArticle,
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/AboutView.vue"),
    },
  ],
});

export default router;
