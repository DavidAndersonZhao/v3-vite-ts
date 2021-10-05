<template>
  <div>
    <button @click="handleMin">-</button> {{ count
    }}<button @click="handleAdd">+</button>
    <child></child>
    <!-- 结论得知
    同一文件中父子组件都用到公共函数
    这个值不会相互影响

    就像一个工厂模式
    每次调用这个公共函数都会创建一个新对象出来
     -->
  </div>
</template>

<script>
// import { reactive } from 'vue'
import { useCount } from "./hooks/useCount";
import child from "./components/child.vue";
export default {
  components: {
    child,
  },
  setup() {
    //   这里的ref采用了hook写法
    const { count, handleMin, handleAdd } = useCount();
    return {
      count,
      handleMin,
      handleAdd,
    };
    // 只说可以这么用  写法2
    // const state = reactive({
    //   name: 'aaa',
    //   age: 18,
    //   count // 同count:count
    // })
    // return {
    //   state,
    //   handleMin,
    //   handleAdd
    // }
    // 只说可以这么用  写法2
  },
};
</script>

<style lang="scss" scoped></style>
