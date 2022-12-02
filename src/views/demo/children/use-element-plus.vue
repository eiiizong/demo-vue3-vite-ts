<template>
  <div class="use-element-plus">
    <div class="demo-title">Element Puls 使用</div>
    <div class="demo-content">
      <div class="demo-content-row">
        <el-button>Default</el-button>
        <el-button type="primary">primary</el-button>
        <el-button type="success">Success</el-button>
        <el-button type="info">Info</el-button>
        <el-button type="warning">Warning</el-button>
        <el-button type="danger">Danger</el-button>
      </div>
      <div class="demo-content-row">
        <el-date-picker v-model="date" type="date" placeholder="Pick a day" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const date = ref('')
</script>

<style lang="scss" scoped>
.use-element-plus {
  width: 100%;
}
</style>
