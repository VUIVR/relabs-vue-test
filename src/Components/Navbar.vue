<template>
  <nav>
    <router-link to="/">Home</router-link>
    <router-link to="/auth">Auth</router-link>
    <router-link to="/shop">Shop</router-link>
  </nav>
</template>

<script>
export default {};
</script>

<style scoped>
nav {
  align-items: center;
  background-color: #024a68;
  border-bottom: 1px solid #ffbd73;
  display: flex;
  height: 50px;
  justify-content: space-evenly;
  padding: 5px;
  width: 100%;
}

a {
  border: 1px solid #ffbd73;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  background-color: #024a68;
}

a:hover {
  box-shadow: 0 0 5px 2px;
  transition: box-shadow 0.2s ease-out;
}

nav a.router-link-exact-active {
  border: 1px solid #3ba3d0;
  box-shadow: 0 0 5px 2px;
  color: #3ba3d0;
}
</style>
