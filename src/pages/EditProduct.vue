<script setup>
import { onMounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import Button from "../components/ui/Button.vue";
import Input from "../components/ui/Input.vue";
import Select from "../components/ui/Select.vue";
import { editProduct, getProductById } from "../services/products";
import { imageUrl, uploadFile } from "../utils/storage";
const data = ref({
  name: "",
  price: 0,
  image: "",
});
const route = useRoute();
const router = useRouter();
const file = ref(null);
const fileUrl = ref("");
const loading = ref(false);

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
    const response = await editProduct(route.params.id, {
      ...data.value,
      image: file.value ? image.data.fullPath : data.value.image,
    });
    alert("Edit Success");
    router.push("/products");
    return response;
  } catch (error) {
    console.log(error);
  } finally {
    loading.value = false;
  }
};

onMounted(async () => {
  const response = await getProductById(route.params.id);
  data.value = response;
});
</script>
<template>
  <form @submit.prevent="onSubmit" class="form-edit">
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
      :src="fileUrl ? fileUrl : imageUrl(data.image)"
      alt=""
      style="width: 200px; height: 200px"
    />
    <Select />
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
