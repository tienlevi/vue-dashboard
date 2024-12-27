import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";
import Layout from "../components/Layout/Layout.vue";
import Chart from "../pages/Chart.vue";
import Products from "../pages/Products.vue";
import Category from "../pages/Category.vue";
import AddProduct from "../pages/AddProduct.vue";
import EditProduct from "../pages/EditProduct.vue";
import AddCategory from "../pages/AddCategory.vue";
import EditCategory from "../pages/EditCategory.vue";
import Users from "../pages/Users.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: Layout,
      children: [
        { path: "", component: Home },
        { path: "chart", component: Chart },
        { path: "products", component: Products },
        { path: "products/add", component: AddProduct },
        { path: "products/edit/:id", component: EditProduct },
        { path: "categories", component: Category },
        { path: "categories/add", component: AddCategory },
        { path: "categories/edit/:id", component: EditCategory },
        { path: "users", component: Users },
      ],
    },
  ],
});

export default router;
