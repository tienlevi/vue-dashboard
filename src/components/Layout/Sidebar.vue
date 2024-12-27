<script setup>
import { RouterLink } from "vue-router";
import { Icon } from "@iconify/vue/dist/iconify.js";
const menuItems = [
  { name: "Dashboard", link: "/", icon: "ic:baseline-dashboard" },
  { name: "Analytics", link: "/chart", icon: "ic:baseline-analytics" },
  {
    name: "Products",
    link: "/products",
    icon: "material-symbols:production-quantity-limits-rounded",
  },
  { name: "Category", link: "/categories", icon: "material-symbols:category" },
  { name: "Users", link: "/users", icon: "material-symbols:user-attributes" },
];
</script>

<template>
  <aside class="sidebar">
    <div class="logo">
      <span class="logo-icon">⚡</span>
      <h2>Dash<span class="highlight">Board</span></h2>
    </div>
    <div>
      <RouterLink
        :to="item.link"
        :class="`menu-item ${{ active: item.name === 'Dashboard' }}`"
        v-for="item in menuItems"
        :key="item.name"
      >
        <span
          ><Icon
            :icon="item.icon"
            width="20"
            height="20"
            style="margin-top: 5px"
        /></span>
        <p>{{ item.name }}</p>
      </RouterLink>
      <div :class="`menu-item ${{ active: item?.name === 'Dashboard' }}`">
        <span
          ><Icon
            icon="material-symbols:logout"
            width="20"
            height="20"
            style="margin-top: 5px"
        /></span>
        <p>Logout</p>
      </div>
    </div>
  </aside>
</template>

<style scoped>
.sidebar {
  padding: 1.5rem;
  background: linear-gradient(180deg, #1e293b 0%, #0f172a 100%);
}

.logo {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem;
}

.logo-icon {
  font-size: 1.5rem;
}

.logo h2 {
  font-size: 1.5rem;
  font-weight: 700;
  color: white;
}

.highlight {
  color: #6366f1;
}

.menu-item {
  display: flex;
  align-items: center;
  padding: 5px 1rem;
  list-style: none;
  margin: 0.25rem 0;
  border-radius: 0.75rem;
  transition: all 0.2s;
  color: #94a3b8;
  text-decoration: none;
}

.menu-item p {
  padding-left: 8px;
}

.menu-item:hover,
.menu-item.active {
  background-color: rgba(99, 102, 241, 0.1);
  color: #6366f1;
}
</style>
