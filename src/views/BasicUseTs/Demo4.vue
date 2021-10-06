<template>
    <h1>{{ msg }}</h1>
    <h2>{{ count }}</h2>
</template>
  
  <script setup lang="ts">
import { computed, ref, defineProps } from "vue";
defineProps({
    msg: String
});
const count = ref(1);
// const plusOne = computed(() => count.value + 1);
// console.log('plusOne: ', plusOne, plusOne.value);
//返回一个readonly 触发警告
// plusOne.value++;
const plusOne = computed({
    get: () => count.value + 1,
    set: (val) => {
        count.value = val - 1;
    }
});
plusOne.value = Math.random();
</script>