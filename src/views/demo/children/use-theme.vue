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
        <el-color-picker v-model="color" @change="handleSetTheme($event)" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Ref } from 'vue'
import { ref } from 'vue'
import { useStoreTheme } from '@/stores/modules'

const color: Ref<string | undefined> = ref('')
const date = ref('')
const storeTheme = useStoreTheme()

color.value = storeTheme.getStoreTheme.color

// 切换主题
const handleSetTheme = (type: string | null) => {
  if (type === 'dark') {
    storeTheme.updateStoreTheme({ name: 'dark' })
  } else if (type === 'default') {
    storeTheme.updateStoreTheme({ name: 'default' })
  } else {
    storeTheme.updateStoreTheme({ color: type ? type : '' })
  }
}
</script>

<style lang="scss" scoped>
.demo-color-block {
  margin-left: 20px;
}
</style>
