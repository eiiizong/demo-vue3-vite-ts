<template>
  <div class="use-pinia">
    <div class="demo-tip">直接使用，无须引入</div>
    <div class="demo-content">
      用户名：{{ userInfo.userName }}
      <el-button type="primary" @click="storeUserInfo.updateStoreUserInfo({ userName: '测试' })">
        set userInfo
      </el-button>
      <el-button type="primary" @click="storeUserInfo.$reset()"> clear userInfo </el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { toRefs } from 'vue'
import { useStoreUserInfo } from '@/stores/modules'

const storeUserInfo = useStoreUserInfo()
const { userInfo } = toRefs(storeUserInfo)
</script>

<style lang="scss" scoped>
.use-element-plus {
  width: 100%;
}
</style>
