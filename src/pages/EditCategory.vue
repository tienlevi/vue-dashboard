<script setup>
import { onMounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import Button from "../components/ui/Button.vue";
import Input from "../components/ui/Input.vue";
import { editCategory, getCategoryById } from "../services/category";
const data = ref({
  name: "",
});
const route = useRoute();
const router = useRouter();
const loading = ref(false);

const onSubmit = async () => {
  try {
    loading.value = true;
    const response = await editCategory(route.params.id, data.value);
    alert("Edit Success");
    router.push("/categories");
    return response;
  } catch (error) {
    console.log(error);
  } finally {
    loading.value = false;
  }
};

onMounted(async () => {
  const response = await getCategoryById(route.params.id);
  data.value = response;
});
</script>
<template>
  <h1>Edit Category</h1>
  <form @submit.prevent="onSubmit" class="form-edit">
    <Input
      style="margin-bottom: 20px"
      v-model="data.name"
      :value="data.name"
      placeholder="Name"
      type="text"
    />
    <Button
      v-if="loading === true"
      :disable="loading"
      children="Loading..."
      style="width: 200px; height: 45px"
    />
    <Button
      v-else="loading === false"
      children="Submit"
      type="submit"
      style="width: 200px; height: 45px"
    />
  </form>
</template>
<style>
.form-edit {
  width: 95%;
}
</style>
