<template>
  <el-button>I am ElButton</el-button>
  <el-config-provider :locale="locale">
    <RouterView />
  </el-config-provider>
</template>

<script setup lang="ts">
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import { RouterView } from 'vue-router'
import { ref } from 'vue'

const locale = ref(zhCn)
</script>

<style lang="scss" scoped></style>
