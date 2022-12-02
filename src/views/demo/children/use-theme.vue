<template>
  <div class="use-element-plus">
    <div class="demo-title">主题切换</div>

    <div class="demo-content">
      <div class="demo-content-row">
        <el-button type="primary">测试按钮</el-button>
      </div>
      <div class="demo-content-row">
        <el-date-picker v-model="date" type="date" placeholder="Pick a day" />
      </div>
    </div>
    <div class="demo-toolbar">
      <el-button @click="handleSetTheme('dark')">Dark</el-button>
      <el-button type="primary" @click="handleSetTheme('default')">Default</el-button>
      <div class="demo-color-block">
        <span class="demonstration">选择主题色</span>
        <el-color-picker v-model="color" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const color = ref('')
const date = ref('')

// 切换主题
const handleSetTheme = (type: string) => {
  const el = document.documentElement
  if (type === 'dark') {
    el && el.classList.add('dark')
  } else {
    el && el.classList.remove('dark')
  }
}
</script>

<style lang="scss" scoped>
.demo-color-block {
  margin-left: 20px;
}
</style>
