<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import Button from "../components/ui/Button.vue";
import Input from "../components/ui/Input.vue";
import { addCategory } from "../services/category";

const data = ref({
  name: "",
});
const loading = ref(false);
const router = useRouter();

const onSubmit = async () => {
  try {
    loading.value = true;
    const response = await addCategory(data.value);
    alert("Add Success");
    router.push("/categories");
    return response;
  } catch (error) {
    console.log(error);
  } finally {
    loading.value = false;
  }
};
</script>
<template>
  <h1>Add Category</h1>
  <form @submit.prevent="onSubmit" class="form-add">
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
.form-add {
  width: 95%;
}
</style>
