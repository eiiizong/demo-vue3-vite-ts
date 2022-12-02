<template>
  <div class="demo">
    <div class="left">
      <RouterView></RouterView>
    </div>
    <div class="right">
      <ul>
        <li v-for="item in data" :key="item.id">
          <a :href="'/demo/' + item.path">{{ item.name }}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const data = ref([
  {
    id: '01',
    path: 'use-axios',
    name: '使用 axios'
  },
  {
    id: '02',
    path: 'use-element-plus',
    name: '使用 Element Plus 组件'
  },
  {
    id: '03',
    path: 'use-language',
    name: '使用 language'
  },
  {
    id: '04',
    path: 'use-pinia',
    name: '使用 pinia'
  },
  {
    id: '05',
    path: 'use-theme',
    name: '使用 theme'
  }
])
</script>

<style lang="scss" scoped>
.demo {
  width: 100%;
  display: flex;
  align-items: flex-start;
  padding: 20px;

  .left {
    flex: 1;
    height: 100%;
    overflow: hidden;
  }
  .right {
    background-color: #fff;
    padding: 20px;
    height: 100%;
    margin-left: 20px;
    ul {
      li {
        margin-bottom: 10px;
        a {
          color: var(--yh-color-primary);
          transition: all 0.3s;
          &:hover {
            text-decoration: underline;
          }
        }
      }
    }
  }
}
</style>
