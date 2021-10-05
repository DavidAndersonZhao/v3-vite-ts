<template>
  <div>
    <slot></slot>
    <div id="main" style="width: 600px; height: 400px"></div>
  </div>
</template>
<script>
import { onMounted } from "vue";
import { echartsInit } from "../hooks/echartsInit";
</script>
<script setup>
const eData = {
  title: {
    text: "ECharts 入门示例",
  },
  tooltip: {},
  xAxis: {
    data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
  },
  yAxis: {},
  series: [
    {
      name: "销量",
      type: "bar",
      data: [5, 20, 36, 10, 10, 20],
    },
  ],
};
const eventArr = [
  {
    eventName: "click",
    query:{seriesIndex: 0, name:"袜子"},
    handler: (e) => {
      console.log(e,"click");
    },
  },
   {
    eventName: "dblclick",
    handler: (e) => {
      console.log(e,"dblclick");
    },
  },
];
onMounted(() => {
  echartsInit("图表", eData, "main",eventArr);
});
</script>
