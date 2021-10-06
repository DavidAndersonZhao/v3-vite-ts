<template>
    <h1>{{ msg }}</h1>
    <DemoChild ref="compa" />
</template>
  
  <script setup lang="ts">
import { ref, onMounted, defineProps } from "vue";
import DemoChild from "./components/Child2.vue";
const compa = ref(null);
defineProps({
    msg: String
});
onMounted(() => {
    // console.log("🍌", (compa.value as any).changeNum)
    (compa.value as any).changeNum();
})

</script>