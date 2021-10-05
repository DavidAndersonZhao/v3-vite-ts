<template>
  <div>setup原写法</div>
  <div>
    使用该setup函数时，它将接受两个参数： props context（详细使用见文档）
  </div>
  <div>
    setup
    {{ state.myname }}---
    {{ state.myage }}
    <button @click="handleChange">按钮</button>
  </div>
  <div>兄弟节点</div>
</template>

<script>
import { reactive } from "vue";
export default {
  setup(props, context) {
    //   代替beforeCreate created
    console.log("setup", props, context);
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
      state,
      handleChange,
    };
  },
};
</script>

<style lang="scss" scoped></style>
