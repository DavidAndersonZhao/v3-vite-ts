<template>
    <div>默认的count:{{ state.count }}</div>
    <button @click="increment">增加</button>
</template>
  
  <script setup lang="ts">
import { reactive, computed, defineProps } from "vue";
type DState = {
    count: number;
    double: number;
}
const state: DState = reactive({
    count: 0,
    double: computed(() => state.count * 2)
})
function increment() {
    state.count++;
}
</script>