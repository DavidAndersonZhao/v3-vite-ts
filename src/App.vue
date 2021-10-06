<script lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloWorld from "./components/HelloWorld.vue";

import { useRoute, useRouter } from "vue-router";
</script>
<script setup lang="ts">
const route = useRoute();
const router = useRouter();
const routerList = router.options.routes;
const handleClick = () => {
  router.back();
};
const routerClick = (url: string) => {
  router.push(url);
};
</script>
<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
  <div @click="handleClick">back</div>
  <div class="xian"></div>
  <!-- <div style="display:flex" > -->
  <div style="display:flex" v-show="$store.state.isShow">
    <div
      v-for="(item, index) in routerList"
      :key="index"
      @click="routerClick(item.path)"
      style="flex:1"
    >
      {{ item.name }}
    </div>
  </div>

  <router-view />

  <!-- <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" /> -->
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.xian {
  background: #2c3e50;
  height: 30px;
}
</style>
