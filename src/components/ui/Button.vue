<script setup>
const { children } = defineProps(["children"]);
</script>
<template>
  <button class="button">
    <span class="text">{{ children }}</span>
  </button>
</template>
<style>
.button {
  align-items: center;
  background-image: linear-gradient(144deg, #af40ff, #5b42f3 50%, #00ddeb);
  border: 0;
  border-radius: 8px;
  box-shadow: rgba(151, 65, 252, 0.2) 0 15px 30px -5px;
  box-sizing: border-box;
  color: #ffffff;
  display: flex;
  font-size: 16px;
  justify-content: center;
  max-width: 100%;
  padding: 3px;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  white-space: nowrap;
  cursor: pointer;
  transition: all 0.3s;
}

.button:active,
.button:hover {
  outline: 0;
}

.button span {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(5, 6, 45);
  width: 100%;
  height: 100%;
  border-radius: 6px;
  transition: 300ms;
}

.button:hover span {
  background: none;
}

button:active {
  transform: scale(0.9);
}
</style>
