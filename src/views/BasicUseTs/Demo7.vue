<template>
    <h1>{{ msg }}</h1>
</template>
  
  <script setup lang="ts">
// 开发 Hooks
/*   2.x与 3.x对比
   beforeCreate -> use setup()
   created -> use setup()
   beforeMount -> onBeforeMount
   mounted -> onMounted
   beforeUpdate -> onBeforeUpdate
   updated -> onUpdated
   beforeDestroy -> onBeforeUnmount
   destroyed -> onUnmounted
   errorCaptured -> onErrorCaptured
*/
import {
    onBeforeMount,
    onMounted,
    onBeforeUpdate,
    onUpdated,
    onBeforeUnmount,
    onUnmounted,
    onErrorCaptured,
    defineProps
} from "vue";

defineProps({
    msg: String
});
onBeforeMount(() => {
    console.log("onBeforeMount");
});
onMounted(() => {
    console.log("onMounted!");
});
onBeforeUpdate(() => {
    console.log("onBeforeUpdate!");
});
onUpdated(() => {
    console.log("onUpdated!");
});
onBeforeUnmount(() => {
    console.log("onBeforeUnmount!");
});
onUnmounted(() => {
    console.log("onUnmounted!");
});
onErrorCaptured(() => {
    console.log("onErrorCaptured!");
});
</script>