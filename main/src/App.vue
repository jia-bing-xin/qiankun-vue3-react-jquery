<script setup lang="ts">
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import { useI18n } from 'vue-i18n';
import HelloWorld from './components/HelloWorld.vue'
const { t } = useI18n()
</script>

<template>
  <el-config-provider :locale="zhCn">
    <div>{{ t('login.username') }}</div>
    <HelloWorld />
  </el-config-provider>
</template>

<style scoped lang="sass">
</style>
