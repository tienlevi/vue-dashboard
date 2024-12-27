import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";
import Layout from "../components/Layout/Layout.vue";
import Chart from "../pages/Chart.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: Layout,
      children: [
        { path: "", component: Home },
        { path: "chart", component: Chart },
      ],
    },
  ],
});

export default router;
