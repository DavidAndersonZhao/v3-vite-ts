<template>
    <h1>{{ msg }}</h1>
    provide应用
    <DemoChild ref="compa" />
</template>
  
  <script setup lang="ts">
import { ref, provide, defineProps } from "vue";
import DemoChild from "./components/Child.vue";
// console.log(useContext);

defineProps({
    msg: String
});
const themeRef = ref("dark");
provide("test",themeRef)

setTimeout(() => {
    themeRef.value = "red"
}, 1000)
</script>