<script setup>
const { listOptions, selectId } = defineProps(["listOptions", "selectId"]);

const emit = defineEmits(["update:modelValue"]);
console.log(selectId);

const onChange = (event) => {
  emit("update:modelValue", event.target.value);
};
</script>

<template>
  <div class="select-wrapper">
    <select @change="onChange" class="custom-select">
      <option
        value=""
        disabled
        :selected="selectId === undefined || selectId === null"
      >
        Select an option
      </option>
      <option
        v-for="item in listOptions"
        :value="item.id"
        :selected="item.id === selectId ? true : false"
      >
        {{ item.name }}
      </option>
    </select>
  </div>
</template>
<style>
.custom-select {
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  width: 200px;
  padding: 10px 35px 10px 15px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background: white;
  cursor: pointer;
  outline: none;
}

/* Custom arrow */
.select-wrapper {
  position: relative;
  width: fit-content;
}

.select-wrapper::after {
  content: "";
  position: absolute;
  right: 15px;
  top: 50%;
  transform: translateY(-50%);
  width: 0;
  height: 0;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-top: 6px solid #666;
  pointer-events: none;
}

/* Hover and focus states */
.custom-select:hover {
  border-color: #999;
}

.custom-select:focus {
  border-color: #2563eb;
  box-shadow: 0 0 0 2px rgba(37, 99, 235, 0.2);
}

/* Styling for options */
.custom-select option {
  padding: 10px;
  font-size: 16px;
}

/* Remove default focus outline in Firefox */
.custom-select:-moz-focusring {
  color: transparent;
  text-shadow: 0 0 0 #000;
}
</style>
