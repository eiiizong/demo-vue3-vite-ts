<template>
  <div class="login-form" :style="loginFormStyle">
    <img :src="imageLogo" alt="logo" class="logo" />
    <div class="tip">欢迎登陆</div>
    <div class="form-wrapper">
      <el-form :model="formData">
        <el-form-item>
          <el-input type="text" v-model="formData.userName" placeholder="请您输入用户名称" />
        </el-form-item>
        <el-form-item>
          <el-input type="password" v-model="formData.password" placeholder="请您输入密码" />
        </el-form-item>
      </el-form>
    </div>
    <div class="button-wrapper">
      <el-button type="primary" style="width: 100%" @click="emit('login')">登 录</el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import imageLogo from '../images/logo.png'
import imageBgRight from '../images/bg-right.png'

import { ref, reactive, computed } from 'vue'

const emit = defineEmits(['login'])

const formData = reactive({
  userName: 'admin',
  password: ''
})

const loginFormStyle = computed(() => {
  return `background-image: url(${imageBgRight});`
})
</script>

<style lang="scss" scoped>
.login-form {
  width: 640px;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  transition: all 0.3s;
  display: flex;
  flex-direction: column;
  padding: 0 140px;
  img {
    padding: 110px 0 20px 0;
    margin: 0 auto;
  }
  .tip {
    font-size: 20px;
    font-weight: 400;
    line-height: 36px;
    color: #ffffff;
    padding-top: 138px;
  }
  .form-wrapper {
    padding-top: 36px;
  }
  .button-wrapper {
    width: 100%;
    padding-top: 20px;
  }
}
</style>
