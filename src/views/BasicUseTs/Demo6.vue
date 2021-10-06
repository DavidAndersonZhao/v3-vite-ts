<template>
    <h1>{{ msg }}</h1>
</template>
  
  <script setup lang="ts">
/**
 * 1.不需要手动传入依赖
 * 2.不是lazy初始化执行分析依赖
 * 3.无法获取原始值
 * 4.一些异步操作放里面更加的合适
 * 5.wacth第三个参数处理副作用的第一个参数
 */
import { ref, defineProps, watchEffect, onMounted } from "vue";
defineProps({
    msg: String
});
const num = ref(0);
onMounted(() => {
    console.log("onMounted")
});
const stop = watchEffect((onInvalidate) => {
    console.log("watchEffed之前调用", num.value);
    onInvalidate(() => {
        /** 清楚副作用 */
    })
}, {
    // flush:"sync",
    onTrigger(e) {
        //debugger;
    }
})
//停用监听
stop();
setTimeout(() => {
    num.value++;
}, 1000);

</script>