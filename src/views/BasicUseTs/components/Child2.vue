<template>
    <h1>{{ num }}</h1>
</template>
  
<script setup lang="ts">
import { ref } from "vue";
// const { expose } = useContext();
let num = ref(0)
function changeNum() {
    num.value = Math.random();
}
defineExpose ({
    changeNum
})
</script>