<template>
<el-menu
    class="h-6"
    mode="horizontal"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"    
  >
    <el-menu-item index="1"><router-link to="/">Home</router-link></el-menu-item>
    <el-menu-item index="2"><router-link to="/auth">Auth</router-link></el-menu-item>
    <el-menu-item index="3"><router-link to="/shop">Shop</router-link></el-menu-item>
  </el-menu>
</template>

