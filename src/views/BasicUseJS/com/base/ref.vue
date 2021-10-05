<template>
  <div>
    ref 响应式--{{ myname }}--{{ myage }}
    <button @click="handleClck">按钮</button>
  </div>
</template>

<script>
/*ref接受一个内部值并返回一个反应性和可变的 ref 对象。
ref 对象有一个.value指向内部值的属性。  */
import { ref } from "vue";

export default {
  setup() {
    const myname = ref("tom");
    const myage = ref(18);
    const handleClck = () => {
      myname.value = "xiaoMing";
      myage.value = 180;
    };
    return {
      myname,
      myage,
      handleClck,
    };
  },
};
</script>

<style lang="scss" scoped></style>
