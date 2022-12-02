import { toRefs } from 'vue'
import { useStoreTheme } from '@/stores/modules'
import { setThemeColor } from '@/utils/set'

/**
 * 设置主题
 */
const useSetTheme = () => {
  const { theme } = toRefs(useStoreTheme())
  const { name, color } = theme.value
  console.log('useSetTheme', name, color)
  const el = document.documentElement

  // 是否存在主题名称
  if (name) {
    if (name === 'dark') {
      el && el.classList.add('dark')
    } else if (name === 'default') {
      el && el.classList.remove('dark')
    }
  } else {
    el && el.classList.remove()
  }

  // 是否存在主题色
  setThemeColor(color ? color : '', name === 'dark', 'yh')
}

export { useSetTheme }
