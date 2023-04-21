<script setup lang="ts">

</script>
<template>
  <div style="display: flex;">
    <el-menu router>
      <el-menu-item index="/">Home</el-menu-item>
      <el-menu-item index="/Login">Login</el-menu-item>
      <el-menu-item index="/Detail">Detail</el-menu-item>
    </el-menu>
    <router-view />
  </div>
</template>
<style lang="less" scoped></style>