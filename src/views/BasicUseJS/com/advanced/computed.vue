<template>
  <div>
    <!-- 计算属性 -->
    计算属性-- {{ computedname }}
    <button @click="handleChange">按钮</button>
  </div>
</template>

<script>
import { ref, computed } from "vue";
export default {
  setup() {
    const myname = ref("tom");
    const computedname = computed(() => {
      return (
        myname.value.substring(0, 1).toUpperCase() + myname.value.substring(1)
      );
    });

    const handleChange = () => {
      myname.value = "xiaoMing";
    };
    return {
      myname,
      computedname,
      handleChange,
    };
  },
};
</script>

<style lang="scss" scoped></style>
