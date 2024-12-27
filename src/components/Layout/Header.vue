<script setup>
const notifications = 3;
</script>

<template>
  <header class="header">
    <div class="search">
      <span class="search-icon">🔍</span>
      <input type="text" placeholder="Search..." />
    </div>
    <div class="actions">
      <button class="notification-btn">
        <span class="notification-icon">🔔</span>
        <span class="notification-badge">{{ notifications }}</span>
      </button>
      <button class="profile-button">
        <img src="https://i.pravatar.cc/32" alt="User avatar" class="avatar" />
        <span>John Doe</span>
        <span class="dropdown-icon">▼</span>
      </button>
    </div>
  </header>
</template>

<style scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.5rem;
  background: white;
  height: 100%;
}

.search {
  position: relative;
  display: flex;
  align-items: center;
}

.search-icon {
  position: absolute;
  left: 0.75rem;
  color: #64748b;
}

.search input {
  padding: 0.5rem 1rem 0.5rem 2.5rem;
  border: 1px solid #e2e8f0;
  border-radius: 0.75rem;
  width: 300px;
  transition: border-color 0.2s;
}

.search input:focus {
  outline: none;
  border-color: #6366f1;
}

.actions {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.notification-btn {
  position: relative;
  padding: 0.5rem;
  border-radius: 0.5rem;
}

.notification-badge {
  position: absolute;
  top: 0;
  right: 0;
  background: #ef4444;
  color: white;
  font-size: 0.75rem;
  padding: 0.125rem 0.375rem;
  border-radius: 9999px;
}

.profile-button {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.5rem 1rem;
  border-radius: 0.75rem;
  transition: background-color 0.2s;
}

.profile-button:hover {
  background-color: #f1f5f9;
}

.avatar {
  width: 32px;
  height: 32px;
  border-radius: 9999px;
}

.dropdown-icon {
  font-size: 0.75rem;
  color: #64748b;
}
</style>
