<template>
  <div class="use-echart-pie">
    <div class="demo-title">使用示例</div>
    <div class="demo-content">
      <div id="chart" style="width: 600px; height: 600px"></div>
    </div>
    <div class="demo-toolbar"></div>
  </div>
</template>

<script setup lang="ts">
import type { ECharts, EChartsOption } from 'echarts'
import { init } from 'echarts'
import { onMounted } from 'vue'

onMounted(() => {
  const charEle = document.getElementById('chart') as HTMLElement

  const charEch: ECharts = init(charEle)
  const option: EChartsOption = {
    tooltip: {
      trigger: 'item'
    },
    legend: {
      top: '5%',
      left: 'center'
    },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: ['40%', '70%'],
        avoidLabelOverlap: false,
        label: {
          show: false,
          position: 'center'
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 40,
            fontWeight: 'bold'
          }
        },
        labelLine: {
          show: false
        },
        data: [
          { value: 1048, name: 'Search Engine' },
          { value: 735, name: 'Direct' },
          { value: 580, name: 'Email' },
          { value: 484, name: 'Union Ads' },
          { value: 300, name: 'Video Ads' }
        ]
      }
    ]
  }
  charEch.setOption(option)
})
</script>

<style lang="scss" scoped>
.use-echart-pie {
  width: 100%;
}
</style>
