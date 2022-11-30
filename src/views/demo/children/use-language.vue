<template>
  <div class="use-element-plus">
    <div class="demo-tip">language</div>

    <div class="demo-content">
      <el-row class="mb-4">
        <el-date-picker v-model="value1" type="date" placeholder="Pick a day" />
      </el-row>
      <div>文本内容： {{ useI18nT(text) }}</div>
      <el-button type="primary" @click="handleChangeLanguage('zh-cn')">中文</el-button>
      <el-button type="success" @click="handleChangeLanguage('en')">英文</el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useStoreLanguage } from '@/stores/modules'

const { t: useI18nT, locale } = useI18n()
const storeLanguage = useStoreLanguage()

const value1 = ref('')
const text = ref('testMessage.userName')

const handleChangeLanguage = (type: string) => {
  locale.value = type
  storeLanguage.updateStoreLanguage(type)
}
</script>

<style lang="scss" scoped>
.use-element-plus {
  width: 100%;
}
</style>
