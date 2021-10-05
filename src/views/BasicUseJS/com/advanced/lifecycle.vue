<template>
  <div>
    <!-- 生命周期-->
    生命周期 lifecycel--{{ myname }}
    <button @click="handleClick">按钮</button>
  </div>
</template>

<script>
import {
    onBeforeMount,
    onMounted,
    onBeforeUpdate,
    onUpdated,
    onBeforeUnmount,
    onUnmounted,
    onErrorCaptured,
    ref,
} from "vue";
export default {
  setup() {
    /*   2.x与 3.x对比
   beforeCreate -> use setup()
   created -> use setup()
   beforeMount -> onBeforeMount
   mounted -> onMounted
   beforeUpdate -> onBeforeUpdate
   updated -> onUpdated
   beforeDestroy -> onBeforeUnmount
   destroyed -> onUnmounted
   errorCaptured -> onErrorCaptured
*/
    //   状态
    const myname = ref("tom");
    const handleClick = () => {
      myname.value = "xiaoMing";
    };
    // 注册回调
    onBeforeMount(() => {
      console.log("onBeforeMount", "挂载前");
    });
    onMounted(() => {
      // new Swiper
      console.log("onMounted", "挂载结束");
    });
    onBeforeUpdate(() => {
      console.log("onBeforeUpdate!", "更新前");
    });
    onUpdated(() => {
      console.log("onUpdated", "更新结束");
    });
    onBeforeUnmount(() => {
      console.log("onBeforeUnmount!", "销毁前");
    });
    onUnmounted(() => {
      // 清定时器
      console.log("onUnmounted", "销毁结束");
    });
    onErrorCaptured(() => {
      console.log("onErrorCaptured!", "错误捕获");
    });
    return {
      myname,
      handleClick,
    };
  },
};
</script>

<style lang="scss" scoped></style>
