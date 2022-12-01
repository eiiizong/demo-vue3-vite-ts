import { useColourBlend } from './useColourBlend'

const setThemeColor = (color: string) => {
  const el = document.documentElement
  const body = document.querySelector('body')
  // const nprogress = document.querySelector("#nprogress .bar");
  // console.log(nprogress)
  if (el) {
    el.style.setProperty('--el-color-primary', color)
  }
  if (body) {
    body.style.setProperty('--van-primary-color', color)
  }

  // nprogress.style.setProperty("background", color);
  // 此行判断是否为白天/暗夜模式，可根据自身业务调整代码
  const mixColor = '#ffffff' // '#000000'
  // 此行判断是否为白天/暗夜模式，可根据自身业务调整代码
  for (let i = 1; i < 10; i++) {
    el.style.setProperty(`--el-color-primary-light-${i}`, useColourBlend(color, mixColor, i / 10))
    el.style.setProperty(`--el-color-primary-dark-${i}`, useColourBlend(color, mixColor, i / 10))
  }
  el.style.setProperty(`--el-color-primary-dark-2`, useColourBlend(color, mixColor, 0.2))
}

export { setThemeColor }
