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
  padding: 0;
  margin: 0;
}

a {
  text-decoration: none;
}
</style>
