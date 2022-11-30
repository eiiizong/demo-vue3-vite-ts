<template>
  <div class="use-element-plus">
    <div class="demo-tip">直接使用，无须引入</div>
    <div class="demo-content">
      <el-row class="mb-4">
        <el-button>Default</el-button>
        <el-button type="primary">测试</el-button>
        <el-button type="success">Success</el-button>
        <el-button type="info">Info</el-button>
        <el-button type="warning">Warning</el-button>
        <el-button type="danger">Danger</el-button>
      </el-row>

      <el-row class="mb-4">
        <el-date-picker v-model="value1" type="date" placeholder="Pick a day" />
      </el-row>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const value1 = ref('')
</script>

<style lang="scss" scoped>
.use-element-plus {
  width: 100%;
}
</style>
