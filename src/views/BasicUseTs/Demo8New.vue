<template>
    <h1>{{ msg }}</h1>
    <DemoChild ref="compa" />
</template>
  
  <script setup lang="ts">
import { ref, provide, defineProps, useContext } from "vue";
import DemoChild from "@/components/Demo/Child.vue";
/* 
useContext    上下文
全局变量是全局的上下文
上下文是局部的全局变量
*/
const { expose } = useContext();
defineProps({
    msg: String
});
const themeRef = ref("dark");
function changeTheme() {
    themeRef.value = Math.random().toString();
}
expose({
    changeTheme
})
setTimeout(() => {
    themeRef.value = "red"
}, 1000)
</script>