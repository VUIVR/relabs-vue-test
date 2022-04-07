<template>
  <button class="btn">
    <slot />
  </button>
</template>

<script>
export default {
  name: "my-button",
};
</script>

<style scoped>
.btn {
  background-color: transparent;
  border: 1px solid #ffbd73;
  border-radius: 5px;
  color: inherit;
  cursor: pointer;
  display: block;
  outline: none;
  padding: 5px;
}

.btn:hover {
  box-shadow: 0 0 5px 2px;
  transition: box-shadow 0.2s ease-out;
}
</style>
