<template>
    <h1>{{ msg }}</h1>
    <input type="text" ref="root" value="ref使用例子" />
</template>
  
  <script setup lang="ts">
import { ref, defineProps, onMounted } from "vue";
defineProps({
    msg: String
});
const root = ref(null);
//DOM首次渲染完成之后 才能获取到真实的dom
onMounted(() => {
    console.log("🐻", root.value)
})
</script>