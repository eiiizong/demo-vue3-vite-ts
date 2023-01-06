<template>
  <div class="login">
    <LoginMain></LoginMain>
    <LoginForm @login="onLogin"></LoginForm>
  </div>
</template>

<script setup lang="ts">
import LoginBg from './components/LoginBg.vue'
import LoginMain from './components/LoginMain.vue'
import LoginForm from './components/LoginForm.vue'

import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useStoreUserInfo } from '@/stores/modules'

const route = useRoute()
const router = useRouter()

const storeUserInfo = useStoreUserInfo()
// 用户名
const userName = ref('admin')
// 密码
const password = ref('123456')
// 验证码
const verificationcode = ref('123456')

// 登录
const onLogin = () => {
  const { redirect } = route.query

  storeUserInfo.updateStoreUserInfo({
    token: '123123'
  })

  if (redirect) {
    router.push(redirect as string)
  } else {
    router.push('/')
  }
}
</script>

<style lang="scss" scoped>
.login {
  width: 100%;
  height: 100%;
  display: flex;
  overflow: hidden;
  user-select: none;
}
</style>
