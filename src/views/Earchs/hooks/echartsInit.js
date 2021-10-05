import * as echarts from "echarts";
function echartsInit(name, data, id = "main", eventArr=[]) {
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.getElementById(id));
  // 绘制图表
  myChart.setOption(data);

  /* 
  (
    eventName: string,
    query: string|Object,单独点击某行
    handler: Function,
    context?: Object
)
  */
  for(let item of eventArr) {
    myChart.on(item?.eventName, item?.query, item?.handler);
  }
  
}

export { echartsInit };
