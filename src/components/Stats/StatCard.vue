<script setup lang="ts">
defineProps<{
  title: string
  value: string | number
  trend?: number
  icon?: string
}>()
</script>

<template>
  <div class="stat-card">
    <div class="stat-header">
      <h3>{{ title }}</h3>
      <span class="icon">{{ icon }}</span>
    </div>
    <p class="stat-value">{{ value }}</p>
    <div v-if="trend" class="trend" :class="trend > 0 ? 'positive' : 'negative'">
      {{ trend > 0 ? '↑' : '↓' }} {{ Math.abs(trend) }}%
    </div>
  </div>
</template>

<style scoped>
.stat-card {
  background: white;
  padding: 1.5rem;
  border-radius: 1rem;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
  transition: transform 0.2s;
}

.stat-card:hover {
  transform: translateY(-2px);
}

.stat-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.stat-header h3 {
  color: #64748b;
  font-size: 0.875rem;
  font-weight: 600;
}

.icon {
  font-size: 1.5rem;
}

.stat-value {
  font-size: 2rem;
  font-weight: 700;
  color: #1e293b;
  margin: 0.5rem 0;
}

.trend {
  display: inline-flex;
  align-items: center;
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  font-size: 0.875rem;
  font-weight: 500;
}

.trend.positive {
  background-color: #dcfce7;
  color: #166534;
}

.trend.negative {
  background-color: #fee2e2;
  color: #991b1b;
}
</style>