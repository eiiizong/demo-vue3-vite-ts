import { colorMix } from './colorMix'

/**
 *
 * @param color hex颜色
 * @param isDark 是否为暗黑主题
 * @param namespace 命名空间
 */
const setThemeColor = (color: string, isDark: boolean = false, namespace: string = 'el') => {
  const el = document.documentElement

  if (el) {
    el.style.setProperty(`--${namespace}-color-primary`, color)
  }

  // 此行判断是否为白天/暗夜模式，可根据自身业务调整代码
  const mixColor = isDark ? '#000000' : '#ffffff'
  // 此行判断是否为白天/暗夜模式，可根据自身业务调整代码
  for (let i = 1; i < 10; i++) {
    el.style.setProperty(
      `--${namespace}-color-primary-light-${i}`,
      colorMix(color, mixColor, i / 10)
    )
    el.style.setProperty(
      `--${namespace}-color-primary-dark-${i}`,
      colorMix(color, mixColor, i / 10)
    )
  }
  el.style.setProperty(`--${namespace}-color-primary-dark-2`, colorMix(color, mixColor, 0.2))
}

export { setThemeColor }
