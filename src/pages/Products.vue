<script setup>
import { onMounted, ref } from "vue";
import { getProducts } from "../services/products";
const data = ref([]);
onMounted(async () => {
  const response = await getProducts();
  data.value = response;
  console.log(data.value);
});
</script>
<template>
  <table>
    <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Price (VND)</th>
        <th>Image</th>
        <th>Category</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in data">
        <td>{{ item.id }}</td>
        <td>{{ item.name }}</td>
        <td>{{ item.price }}</td>
        <td><img :src="item.image" alt="" /></td>
        <td>{{ item.category }}</td>
      </tr>
    </tbody>
  </table>
</template>
<style>
table {
  border-collapse: collapse;
  min-width: 100%;
}

th,
td {
  padding: 15px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

th {
  background: #6c7ae0;
  text-align: left;
  font-weight: normal;
  font-size: 1.1rem;
  color: white;
}

th:last-child {
  border: 0;
}

td {
  padding-top: 10px;
  padding-bottom: 10px;
  color: #808080;
}

tr:nth-child(even) td {
  background: #f8f6ff;
}
</style>
