<script setup lang="ts">
</script>

<template>
  <div style="display: flex;">
    <el-menu router>
      <el-menu-item index="/">main</el-menu-item>
      <el-menu-item index="/sub-vue3">sub-vue3</el-menu-item>
      <el-menu-item index="/sub-react">sub-react</el-menu-item>
      <el-menu-item index="/sub-jquery">sub-jquery</el-menu-item>
    </el-menu>
    <router-view />
    <div id="container" />
  </div>
</template>

<style lang="scss" scoped></style>