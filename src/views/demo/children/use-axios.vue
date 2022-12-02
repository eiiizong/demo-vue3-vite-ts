<template>
  <div class="use-element-plus">
    <div class="demo-title">请求示例</div>
    <div class="demo-content">
      <div class="demo-content-row">
        接口返回内容：<br />{{ JSON.stringify(customData.hi05List) }}
      </div>
    </div>
    <div class="demo-toolbar">
      <el-button type="primary" @click="handleRequest">调用接口</el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { requestSPGetHi05List } from '@/server/api'
import type { RequestSPGetHi05List } from '@/server/types'

interface CustomData {
  hi05List: [RequestSPGetHi05List.Hi05ListItem] | []
}

const customData: CustomData = reactive({
  hi05List: []
})

const handleRequest = () => {
  requestSPGetHi05List().then((res) => {
    customData.hi05List = res.lists.hi05List.list
  })
}
</script>

<style lang="scss" scoped>
.use-element-plus {
  width: 100%;
}
</style>
