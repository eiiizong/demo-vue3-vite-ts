<template>
  <div class="use-element-plus">
    <div class="demo-tip">language</div>

    <div class="demo-content">
      <div>文本内容： {{ t(text) }}</div>
      <el-button type="primary" @click="handleChangeLanguage('zh-cn')">中文</el-button>
      <el-button type="success" @click="handleChangeLanguage('en')">英文</el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()

const text = ref('testMessage.userName')

const handleChangeLanguage = (type: string) => {
  locale.value = type
}
</script>

<style lang="scss" scoped>
.use-element-plus {
  width: 100%;
}
</style>
