<script setup>
import { onMounted, ref } from "vue";
import { RouterLink } from "vue-router";
import Button from "../components/ui/Button.vue";
import { deleteCategory, getCategories } from "../services/category";
const data = ref([]);

const handleDelete = async (id) => {
  if (confirm("Are sure want to delete ?")) {
    const newData = data.value.filter((item) => item.id !== id);
    data.value = newData;
    const response = await deleteCategory(id);
    return response;
  }
};

onMounted(async () => {
  const response = await getCategories();
  data.value = response;
});
</script>
<template>
  <RouterLink
    to="/categories/add"
    style="text-decoration: none; margin-bottom: 10px; float: right"
  >
    <Button children="Add" style="width: 100px; height: 45px" />
  </RouterLink>
  <table>
    <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in data">
        <td>{{ item.id }}</td>
        <td>{{ item.name }}</td>

        <td style="display: grid; gap: 10px">
          <Button
            @click="handleDelete(item.id)"
            children="Delete"
            style="width: 100px; height: 45px"
          />
          <RouterLink
            :to="`/categories/edit/${item.id}`"
            style="text-decoration: none"
          >
            <Button children="Edit" style="width: 100px; height: 45px" />
          </RouterLink>
        </td>
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
