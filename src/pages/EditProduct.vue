<script setup>
import { onMounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import Button from "../components/ui/Button.vue";
import Input from "../components/ui/Input.vue";
import Select from "../components/ui/Select.vue";
import { addProduct, editProduct, getProductById } from "../services/products";
const data = ref({
  name: "",
  price: 0,
  image: "",
});
const route = useRoute();
const router = useRouter();

const onSubmit = async () => {
  try {
    const response = await editProduct(route.params.id, data.value);
    alert("Edit Success");
    router.push("/products");
    return response;
  } catch (error) {
    console.log(error);
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
    <Input
      style="margin-bottom: 20px"
      v-model="data.image"
      :value="data.image"
      placeholder="Image"
      type="text"
    />
    <Select />
    <Button
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
