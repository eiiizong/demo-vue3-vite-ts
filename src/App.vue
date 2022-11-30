<template>
  <el-config-provider
    :locale="configProviderData.locale"
    :size="configProviderData.size"
    :zIndex="configProviderData.zIndex"
    :namespace="configProviderData.namespace"
    :button="configProviderData.button"
    :message="configProviderData.message"
    :experimental-features="configProviderData.experimentalFeatures"
  >
    <RouterView />
  </el-config-provider>
</template>

<script setup lang="ts">
// element组件使用中文语言
import zhCn from 'element-plus/dist/locale/zh-cn'
import { RouterView } from 'vue-router'
import { reactive } from 'vue'

const configProviderData = reactive({
  // 翻译文本对象
  locale: zhCn,
  // 全局组件大小  large / default /small
  size: 'default',
  // 全局初始化 zIndex 的值
  zIndex: 2000,
  // 全局组件类名称前缀 (需要配合 $namespace 使用)
  namespace: 'el',
  // 按钮相关的配置
  button: {
    // 自动在两个中文字符之间插入空格
    autoInsertSpace: false
  },
  // 消息相关配置
  message: {
    // 可同时显示的消息最大数量
    max: 1
  },
  // 添加的实验阶段的功能，所有功能都是默认设置为 false
  experimentalFeatures: {}
})
</script>

<style lang="scss">
// 全局公用样式
@import '@/assets/styles/scss/index.scss';
// @import '@/assets/styles/scss/element/index.scss';
// 字体文件引入
@import '@/assets/iconfont/index.scss';
</style>
