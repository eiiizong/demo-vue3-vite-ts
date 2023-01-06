<template>
  <div class="home">
    <div class="left">
      <HomeLogo></HomeLogo>
      <HomeMenus></HomeMenus>
    </div>
    <div class="right">
      <HomeTools></HomeTools>
      <HomeTabs></HomeTabs>
      <HomeContent></HomeContent>
    </div>
  </div>
</template>

<script setup lang="ts">
import HomeLogo from './components/HomeLogo.vue'
import HomeMenus from './components/HomeMenus.vue'
import HomeTools from './components/HomeTools.vue'
import HomeTabs from './components/HomeTabs.vue'
import HomeContent from './components/HomeContent.vue'
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100%;
  display: flex;
  color: #fff;
  .left {
    display: flex;
    flex-direction: column;
  }
  .right {
    flex: 1;
    overflow: hidden;
    display: flex;
    flex-direction: column;
  }
}
</style>
