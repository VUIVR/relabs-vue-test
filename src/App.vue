<template>
  <div class="common-layout">
    <el-container>
      <el-header> <Navbar /> </el-header>
      <el-main> <router-view /> </el-main>
    </el-container>
  </div>
</template>

<script>
import Navbar from "@/Components/Navbar.vue";
export default {
  components: {
    Navbar,
  },
};
</script>

<style>
* {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #ffbd73;
  padding: 0;
  margin: 0;
}

:root {
  background: #3ba3d0;
}

a {
  text-decoration: none;
}

.wrapper {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-top: 20px;
}

.container {
  background: #024a68;
  border: 1px solid #ffbd73;
  border-radius: 5px;
  margin-bottom: 10px;
  padding: 15px;
  height: fit-content;
}

h1,
h2,
h3,
h4 {
  text-align: center;
}
</style>
