<script setup>
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import Button from "../components/ui/Button.vue";
import Input from "../components/ui/Input.vue";
import Select from "../components/ui/Select.vue";
import { addProduct } from "../services/products";
import { uploadFile } from "../utils/storage";
import { getCategories } from "../services/category";

const data = ref({
  name: "",
  price: 0,
  image: "",
  category: "",
});
const categories = ref([]);
const file = ref(null);
const loading = ref(false);
const fileUrl = ref("");
const router = useRouter();

const handleChangeFile = (event) => {
  const selectedFile = event.target.files[0];
  const reader = new FileReader();
  reader.onload = () => {
    file.value = selectedFile;
    fileUrl.value = reader.result;
  };
  reader.readAsDataURL(selectedFile);
};

const onSubmit = async () => {
  try {
    loading.value = true;
    const image = await uploadFile(file.value);
    const response = await addProduct({
      ...data.value,
      image: image.data.fullPath,
    });
    alert("Add Success");
    router.push("/products");
    return response;
  } catch (error) {
    console.log(error);
  } finally {
    loading.value = false;
  }
};

onMounted(async () => {
  const response = await getCategories();
  categories.value = response;
});
</script>
<template>
  <h1>Add Product</h1>
  <form @submit.prevent="onSubmit" class="form-add">
    <Input
      style="margin-bottom: 20px"
      v-model="data.name"
      :value="data.name"
      placeholder="Name"
      type="text"
    />
    <Input
      style="margin-bottom: 20px"
      v-model="data.price"
      :value="data.price"
      placeholder="Price"
      type="number"
    />
    <Input style="margin-bottom: 20px" type="file" @change="handleChangeFile" />
    <img
      v-if="fileUrl"
      :src="fileUrl"
      alt=""
      style="width: 200px; height: 200px; margin-bottom: 20px"
    />
    <Select
      :listOptions="categories"
      v-model="data.category"
      style="margin-bottom: 20px"
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
