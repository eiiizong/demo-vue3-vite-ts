<template>
  <div class="use-element-plus">
    <div class="demo-tip">theme</div>
    <div class="demo-content">
      <el-button type="primary">测试</el-button>
      <div class="demo-color-block">
        <span class="demonstration">选择主题色</span>
        <el-color-picker v-model="color1" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const color1 = ref('')
</script>

<style lang="scss" scoped>
.use-element-plus {
  width: 100%;
}
</style>
