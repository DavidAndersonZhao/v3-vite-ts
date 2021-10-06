<template>
    <h1>{{ msg }}</h1>
    测试
    {{ count }}
    <h3>toRefs结构reactive{{ yd }}</h3>
</template>
  
<script setup lang="ts">
import { ref, reactive, defineProps, toRefs } from "vue";
defineProps({
    msg: String
})
//ref就是一般某个元素 简单数据类型 reactive对象
const count = ref(0);
console.log('count: ', count.value);
count.value++;
console.log('count2: ', count.value);
//使用reactive包裹单独的ref
const state = reactive({
    count
});
console.log('state: ', state);
const obj = reactive({
    yd: "yideng",
    address: "北京"
})
const { yd } = { ...toRefs(obj) }
</script>