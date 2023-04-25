<script setup lang="ts">

</script>
<template>
    <el-menu router>
        <el-menu-item index="/login">login</el-menu-item>
        <el-menu-item index="/detail">detail</el-menu-item>
    </el-menu>
    <router-view />
</template>
<style lang="less" scoped></style>