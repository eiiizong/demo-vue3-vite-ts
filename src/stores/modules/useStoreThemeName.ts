import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

/**
 * 命名规则：
 * 数据字段如: test
 * 方法名则为： useStoreTest
 * getter方法名则为： getStoreTest
 * actions方法名则为： updateStoreTest
 */
//
/**
 * store 语言
 */
const useStoreThemeName = defineStore(
  'storeThemeName',
  () => {
    const themeName = ref('')

    const getStoreThemeName = computed(() => themeName.value)

    function updateStoreThemeName(data: string) {
      themeName.value = data
    }

    return { themeName, getStoreThemeName, updateStoreThemeName }
  },
  {
    persist: {
      storage: localStorage
    }
  }
)

export { useStoreThemeName }
