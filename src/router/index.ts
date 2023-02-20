import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/invoice",
      name: "invoice",
      component: () => import("@/views/InvoiceView.vue"),
    },
    {
      path: "/transaction",
      name: "transaction",
      component: () => import("@/views/TransactionView.vue"),
    },
    {
      path: "/payment",
      name: "payment",
      component: () => import("@/views/PaymentView.vue"),
    },
    {
      path: "/setting",
      name: "setting",
      component: () => import("@/views/SettingView.vue"),
    },
    {
      path: "/support",
      name: "support",
      component: () => import("@/views/SupportView.vue"),
    },
    {
      path: "/community",
      name: "community",
      component: () => import("@/views/CommunityView.vue"),
    },
  ],
});

export default router;
