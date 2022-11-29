<template>
  <div class="not-found" :style="wrapperStyle">
    <div class="mars" :style="marsStyle"></div>
    <img :src="image404" class="logo-404" />
    <img :src="imageMeteor" class="meteor" />
    <p class="title">Oh no!!</p>
    <p class="subtitle">页面未找到</p>
    <p class="subtitle">要么请求一个不再在这里的页面。</p>

    <div align="center">
      <a class="btn-back" href="#">返回上一页</a>
    </div>

    <img :src="imageAstronaut" class="astronaut" />
    <img :src="imageSpaceship" class="spaceship" />

    <!--HTML5 canvas点击爆炸特效-->
    <canvas
      class="fireworks"
      style="position: fixed; left: 0; top: 0; z-index: 99999999; pointer-events: none"
    >
    </canvas>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue'
import image404 from './images/404.svg'
import imageMeteor from './images/meteor.svg'
import imageAstronaut from './images/astronaut.svg'
import imageSpaceship from './images/spaceship.svg'
import imageStar from './images/star.svg'
import imageMars from './images/mars.svg'

const wrapperStyle = computed(() => {
  let str = ''
  str += `background-image: url(${imageStar}), linear-gradient(to bottom, #05007a, #4d007d);`
  return str
})

const marsStyle = computed(() => {
  let str = ''
  str += `background: url(${imageMars}) no-repeat bottom center;`
  return str
})

onMounted(() => {})
</script>

<style lang="scss" scoped>
@keyframes floating {
  from {
    transform: translateY(0px);
  }
  65% {
    transform: translateY(15px);
  }
  to {
    transform: translateY(0px);
  }
}
.not-found {
  width: 100%;
  height: 100vh;
  margin: 0;
  background-attachment: fixed;
  overflow: hidden;
  .mars {
    left: 0;
    right: 0;
    bottom: 0;
    position: absolute;
    height: 27vmin;
    background-size: cover !important;
  }
  .logo-404 {
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    top: 16vmin;
    width: 30vmin;
  }
  @media (max-width: 480px) and (min-width: 320px) {
    .logo-404 {
      top: 45vmin;
    }
  }

  .meteor {
    position: absolute;
    right: 2vmin;
    top: 16vmin;
  }

  .title {
    color: white;
    font-family: 'Nunito', sans-serif;
    font-weight: 600;
    text-align: center;
    font-size: 5vmin;
    margin-top: 31vmin;
  }
  @media (max-width: 480px) and (min-width: 320px) {
    .title {
      margin-top: 65vmin;
    }
  }

  .subtitle {
    color: white;
    font-family: 'Nunito', sans-serif;
    font-weight: 400;
    text-align: center;
    font-size: 3.5vmin;
    margin-top: -1vmin;
    margin-bottom: 9vmin;
  }

  .btn-back {
    border: 1px solid white;
    color: white;
    height: 5vmin;
    padding: 12px;
    font-family: 'Nunito', sans-serif;
    text-decoration: none;
    border-radius: 5px;
  }
  .btn-back:hover {
    background: white;
    color: #4d007d;
  }
  @media (max-width: 480px) and (min-width: 320px) {
    .btn-back {
      font-size: 3.5vmin;
    }
  }

  .astronaut {
    position: absolute;
    top: 18vmin;
    left: 10vmin;
    height: 30vmin;
    animation: floating 3s infinite ease-in-out;
  }
  @media (max-width: 480px) and (min-width: 320px) {
    .astronaut {
      top: 2vmin;
    }
  }

  .spaceship {
    position: absolute;
    bottom: 15vmin;
    right: 24vmin;
  }
  @media (max-width: 480px) and (min-width: 320px) {
    .spaceship {
      width: 45vmin;
      bottom: 18vmin;
    }
  }
}
</style>
