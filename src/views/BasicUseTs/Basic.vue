<script lang="ts">
// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/script-setup-2/active-rfcs/0000-script-setup.md
import { defineComponent } from "vue";
import HelloWorld from "./helloWorld.vue";
// import css from "../../assets/index.css"
export default defineComponent({
  //   name: "HelloWorld",
  components: {
    HelloWorld,
  },
  setup() {
    // 代码这里
    const data = "京程一灯666";
    return data;
  },
});
</script>

<template>
  <h1>{{ msg }}</h1>

  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank"
      >Vite Documentation</a
    >
    |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Documentation</a>
  </p>

  <button>count is: {{ num }}</button>
  <h3 class="text">京程一灯</h3>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { number } from "echarts";
const color = "red";
const font = {
  size: "3em",
};
defineProps({
  msg: String,
});
let num = ref(100);
onMounted(() => {
  num  = 200;
  console.log("挂载", num);
});
</script>

<style>
:root {
  --varColor: yellowgreen;
}
a {
  color: var(--varColor);
}
.text {
  color: v-bind(color);
  font-size: v-bind("font.size");
}
</style>
