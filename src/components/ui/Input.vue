<script setup>
const { placeholder, type, value } = defineProps([
  "placeholder",
  "type",
  "value",
]);

const emit = defineEmits(["update:modelValue"]);

const handleChange = ($event) => {
  emit("update:modelValue", $event.target.value);
};
</script>

<template>
  <input
    :value="value"
    :type="type"
    id="username"
    class="input-field"
    @input="handleChange($event)"
    :placeholder="placeholder"
  />
</template>
<style>
.input-field {
  padding: 10px 15px;
  font-size: 1rem;
  border-radius: 8px;
  border: solid 1px #8d8d8d;
  letter-spacing: 1px;
  width: 100%;
}

.input-field:focus {
  outline: none;
  border: solid 1px #0034de;
}

.input-field:focus ~ label {
  transform: translateY(-51%) translateX(-10px) scale(0.8);
  background-color: #fff;
  padding: 0px 5px;
  color: #0034de;
  font-weight: bold;
  letter-spacing: 1px;
  border: none;
  border-radius: 100px;
}
</style>
