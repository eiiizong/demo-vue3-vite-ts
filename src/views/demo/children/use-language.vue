<template>
  <div class="use-element-plus">
    <div class="demo-tip">language</div>

    <div class="demo-content">
      <div>文本内容： {{ text }}</div>
      {{ $t('testMessage.userName') }}
      <el-button type="primary">中文</el-button>
      <el-button type="success">英文</el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
console.log(t('testMessage.userName'), 987)

const text = ref('')
</script>

<style lang="scss" scoped>
.use-element-plus {
  width: 100%;
}
</style>
