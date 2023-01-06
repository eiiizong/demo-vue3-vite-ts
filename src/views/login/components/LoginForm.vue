<template>
  <div class="login-form" :style="loginFormStyle">登录</div>
</template>

<script setup lang="ts">
import imageBgRight from '../images/bg-right.png'

import { ref, computed } from 'vue'

const loginFormStyle = computed(() => {
  return `background-image: url(${imageBgRight});`
})
</script>

<style lang="scss" scoped>
.login-form {
  width: 640px;
  overflow: hidden;
  display: flex;
  align-items: flex-start;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  transition: all 0.3s;
}
</style>
