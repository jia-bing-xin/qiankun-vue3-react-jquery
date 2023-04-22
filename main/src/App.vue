<script setup lang="ts">
import HelloWorld from '@/components/HelloWorld.vue'
</script>

<template>
  <div style="display: flex;">
    <el-menu router>
      <el-menu-item index="/">main</el-menu-item>
      <el-menu-item index="/sub-vue3">sub-vue3</el-menu-item>
      <el-menu-item index="/sub-react">sub-react</el-menu-item>
    </el-menu>
    <HelloWorld />
  </div>
  <div id="container" />
</template>

<style lang="scss" scoped></style>