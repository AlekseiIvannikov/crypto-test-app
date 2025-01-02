<template>
  <div class="chart-container">
    <VChart :option="chartOptions" autoresize />
  </div>
</template>

<script setup lang="ts">
import { graphic } from 'echarts';
import { LineChart } from 'echarts/charts';
import { GridComponent, TooltipComponent, TitleComponent, LegendComponent } from 'echarts/components';
import { use } from 'echarts/core';
import { CanvasRenderer } from 'echarts/renderers';
import { computed } from 'vue';
import VChart from 'vue-echarts';

use([CanvasRenderer, LineChart, GridComponent, TooltipComponent, TitleComponent, LegendComponent]);

const props = defineProps<{ priceHistory: string[] }>();

const chartOptions = computed(() => ({
  xAxis: {
    type: 'category',
    data: props.priceHistory.map((_, index) => `Day ${index + 1}`),
    axisLine: {
      show: false,
    },
    axisTick: {
      show: false,
    },
    axisLabel: {
      color: '#AEAFBD',
      fontFamily: 'Inter',
      fontSize: 10,
      fontWeight: 600,
      lineHeight: 40,
      overflow: 'truncate',
    },
  },
  yAxis: {
    type: 'value',
    axisLine: {
      show: false,
    },
    axisLabel: {
      color: '#AEAFBD',
      fontFamily: 'Montserrat',
      fontSize: 10,
      fontWeight: 500,
    },
    splitNumber: 2,
    splitLine: {
      show: true,
      lineStyle: {
        width: 0.5,
        type: [10, 10],
        color: '#434651',
      },
    },
  },
  tooltip: {
    trigger: 'axis',
    formatter: '{c}<br/>{b}',
    backgroundColor: '#ED800D',
    borderWidth: 0,
    padding: [4, 8],
    textStyle: {
      color: '#FFFFFF',
      fontFamily: 'Inter',
      fontSize: 10,
      fontWeight: 500,
    },
  },
  color: '#ED800D',
  axisPointer: {
    z: 1,
    lineStyle: {
      width: 0.5,
      type: [5, 5],
      color: '#6B6C79',
    },
  },
  grid: {
    left: 40,
    top: 12,
    right: 12,
    bottom: 40,
  },
  series: [
    {
      data: props.priceHistory,
      type: 'line',
      smooth: true,
      showSymbol: false,
      symbolSize: 10,
      lineStyle: {
        color: '#ED800D',
        width: 1,
      },
      areaStyle: {
        color: new graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            color: 'rgba(239, 179, 37, 1)',
          },
          {
            offset: 1,
            color: 'rgba(45, 45, 45, 0)',
          },
        ]),
      },
    },
  ],
}));
</script>

<style scoped>
.chart-container {
  height: 300px;
  padding: 1rem;
}
</style>
