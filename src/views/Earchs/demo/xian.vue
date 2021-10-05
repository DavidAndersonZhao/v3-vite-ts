<template>
  <div>
    <slot></slot>
    <div id="xian" style="width: 600px; height: 400px"></div>
  </div>
</template>
<script>
import {onMounted } from "vue";
import { echartsInit } from "../hooks/echartsInit";
</script>
<script setup>
const option = {
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: [150, 230, 224, 218, 135, 147, 260],
      type: 'line'
    }
  ]
};
onMounted(() => {
    echartsInit('线表',option,'xian')
})
</script>

<style scoped></style>
