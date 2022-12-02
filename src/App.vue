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
import { reactive, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import { useStoreLanguage } from '@/stores/modules'

const { messages, locale } = useI18n()
const storeLanguage = useStoreLanguage()

const configProviderData = reactive({
  // 翻译文本对象
  locale: messages.value[storeLanguage.language],
  // 全局组件大小  large / default /small
  size: 'default',
  // 全局初始化 zIndex 的值
  zIndex: 2000,
  // 全局组件类名称前缀 (需要配合 $namespace 使用)
  namespace: 'yh',
  // 按钮相关的配置
  button: {
    // 自动在两个中文字符之间插入空格
    autoInsertSpace: false
  },
  // 消息相关配置
  message: {
    // 可同时显示的消息最大数量
    max: 3
  },
  // 添加的实验阶段的功能，所有功能都是默认设置为 false
  experimentalFeatures: {}
})

// 监听语言改变
watch(
  () => storeLanguage.language,
  (val) => {
    configProviderData.locale = messages.value[val]
    locale.value = val
  },
  { immediate: true }
)
</script>

<style lang="scss">
// 字体文件引入
@import '@/assets/iconfont/index.scss';
</style>
