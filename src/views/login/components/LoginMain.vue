<template>
  <div class="login-main" :style="loginMainStyle">
    <div class="title">银海财政产品部综合管理平台</div>
    <div class="img-wrapper">
      <img class="img" :src="imageBgCenter" />
    </div>
  </div>
</template>

<script setup lang="ts">
import imageBgLeft from '../images/bg-left.png'
import imageBgCenter from '../images/bg-center.png'

import { ref, computed } from 'vue'

const loginMainStyle = computed(() => {
  return `background-image: url(${imageBgLeft});`
})
</script>

<style lang="scss" scoped>
.login-main {
  flex: 1;
  overflow: hidden;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  transition: all 0.3s;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 110px 20px;
  white-space: nowrap;
  .title {
    margin-bottom: 80px;
    font-size: 40px;
    font-weight: 700;
    font-stretch: normal;
    line-height: 1;
    letter-spacing: 2px;
    text-shadow: 0px 0 6px rgba(33, 111, 157, 0.5);
    transition: all 0.3s;
    background-image: linear-gradient(to bottom, #18829b, #276b92);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
  }

  .img-wrapper {
    flex: 1;
    overflow: hidden;
    display: flex;
  }
  img {
    width: 774px;
    margin: auto;
  }
  @media screen and (max-width: 1420px) {
    .title {
      font-size: 32px;
    }
    img {
      width: 80%;
    }
  }
  @media screen and (max-width: 1120px) {
    .title {
      font-size: 20px;
    }
  }
}
</style>
