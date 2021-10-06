<template>
    <h1>{{ msg }}</h1>
    <h3>{{ state.count }}</h3>
</template>
  
  <script setup lang="ts">
import { ref, reactive, watch, defineProps } from "vue";
defineProps({
    msg: String
});
// const state = reactive({ count: 0 });
const state = reactive({ count: { count: 0 } });
watch(() => state.count, (count, prevCount) => {
    console.log("第一个监听的值", count, prevCount)
}, {
    deep: true,
    immediate: false
});
setTimeout(() => {
    state.count.count++;
}, 1000);
  // const value = ref(0);
  // watch([value,count],([new ,old],[])=>{

  // })
</script>