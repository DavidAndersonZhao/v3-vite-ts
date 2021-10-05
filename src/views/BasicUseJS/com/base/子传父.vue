<template>
  <div>
    <navbar @event="handleChange" />
    <!-- <button @click="state.isShow = !state.isShow">父按钮</button> -->
    <sidebar v-show="state.isShow" />
  </div>
</template>

<script>
import navbar from "./components/Navbar.vue";
import sidebar from "./components/Sidebar.vue";
import { reactive } from "vue";

export default {
  components: {
    navbar,
    sidebar,
  },
  setup() {
    const state = reactive({
      isShow: false,
    });
    const handleChange = () => {
      state.isShow = !state.isShow;
    };
    return {
      state,
      handleChange,
    };
  },
};
</script>

<style lang="scss" scoped></style>
