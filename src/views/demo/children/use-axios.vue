<template>
  <div class="use-element-plus">
    <div class="demo-tip">axios</div>
    <div class="demo-content">
      <el-button type="primary">测试</el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { requestSPGetHi05List } from '@/server/api'

onMounted(() => {
  requestSPGetHi05List().then((res) => {
    console.log(res, 987678)
  })
  requestSPGetHi05List().then((res) => {
    console.log(res, 987)
  })
})
</script>

<style lang="scss" scoped>
.use-element-plus {
  width: 100%;
}
</style>
