<script setup>
import Sidebar from "./Sidebar.vue";
import Header from "./Header.vue";
import { RouterView } from "vue-router";
</script>

<template>
  <div class="dashboard-layout">
    <Sidebar class="sidebar" />
    <div class="main-content">
      <Header class="header" />
      <main class="content">
        <RouterView />
      </main>
    </div>
  </div>
</template>

<style scoped>
.dashboard-layout {
  display: flex;
  min-height: 100vh;
}

.sidebar {
  width: 250px;
  background-color: #1a1a1a;
  color: white;
}

.main-content {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.header {
  height: 60px;
  background-color: white;
  border-bottom: 1px solid #e2e8f0;
}

.content {
  flex: 1;
  padding: 20px;
  background-color: #f1f5f9;
}
</style>
