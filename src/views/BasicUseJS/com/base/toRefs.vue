<template>
  <div>
    setup
    {{ myname }}---
    {{ myage }}
    <button @click="handleChange">按钮</button>
  </div>
  <div>兄弟节点</div>
</template>

<script>
import { reactive, toRefs } from "vue";
export default {
  setup() {
    //   代替beforeCreate created
    console.log("setup");
    const state = reactive({
      myname: "tom",
      myage: 100,
    }); // 响应式
    const handleChange = () => {
      console.log(state);
      state.myname = "xiaoMing";
      state.myage = 18;
    };
    return {
      // ...state,//因为myname与myage在state下，每次写都有多写一个变量就很烦躁，想到这个 ，虽然可以用展开运算符但是失去了响应式 请用toRefs
      ...toRefs(state),
    //   state,
      handleChange,
    };
  },
};
</script>

<style lang="scss" scoped></style>
