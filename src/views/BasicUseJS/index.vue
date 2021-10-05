<template>
  <div>
    <div class="xian"></div>
    <div style="display: flex">
      <div @click="handleClick(1)" style="flex: 1">js写法</div>
      <div @click="handleClick(2)" style="flex: 1">ts写法</div>
    </div>
    <div v-if="value == 1">
      <el-tabs v-model="activeName" @tab-click="tabClick">
        <el-tab-pane
          v-for="item in tabs"
          :key="item.name"
          :label="item.label"
          :name="item.name"
        >
          <!-- component标签: 它是Vue内置的标签,它的用途是可以动态绑定我们的组件,根据数据不同更换不同的组件. -->
          <component :is="item.components"></component>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<script lang="ts">
import MySetup from "./com/base/setup.vue";
import Todo from "./com/base/todo.vue";
import TodoRef from "./com/base/todoRef.vue";
import Ref from "./com/base/ref.vue";
import RefReactive from "./com/base/ref&reactive.vue";
import ToRefs from "./com/base/toRefs.vue";
import FatherToChild from "./com/base/父传子.vue";
import ChildToFather from "./com/base/子传父.vue";

import Lifecycle from "./com/advanced/lifecycle.vue";
import Computed from "./com/advanced/computed.vue";
import FuzzyQuery from "./com/advanced/模糊查询.vue";
import WatchReactive from "./com/advanced/watch-reactive.vue";
import Watch from "./com/advanced/watch.vue";

// import { defineComponent } from "vue";
import { ref } from "vue";
// export default defineComponent({
// components: { MySetup },
// });
</script>
<script setup lang="ts">
interface TabOption {
  label: string;
  name: string;
  components?: object;
}
let activeName: string = "first";
let value = ref(0);

const tabs: TabOption[] = [
  {
    label: "setup",
    name: "first",
    components: MySetup,
  },
  {
    label: "todo",
    name: "secound",
    components: Todo,
  },
  {
    label: "todoRef",
    name: "third",
    components: TodoRef,
  },
  {
    label: "ref",
    name: "fourth",
    components: Ref,
  },
  {
    label: "ref&reactive",
    name: "fifth",
    components: RefReactive,
  },
  {
    label: "toRefs",
    name: "sixth",
    components: ToRefs,
  },
  {
    label: "父传子",
    name: "seventh",
    components: FatherToChild,
  },
  {
    label: "子传父",
    name: "eighth",
    components: ChildToFather,
  },
  {
    label: "生命周期",
    name: "ninth",
    components: Lifecycle,
  },
  {
    label: "计算属性",
    name: "tenth",
    components: Computed,
  },
  {
    label: "模糊查询",
    name: "eleventh",
    components: FuzzyQuery,
  },
  {
    label: "监视属性",
    name: "twelfth",
    components: Watch,
  },
  {
    label: "监视属性-Reactive",
    name: "thirteenth",
    components: WatchReactive,
  },
];
const handleClick = (num: number) => {
  value.value = num;
};
const tabClick = (tab: string, event: Event) => {
  //   activeName = tab;
  //   console.log(tab.label, event);
};
</script>

<style scoped>
.xian {
  height: 10px;
  background: red;
}
</style>
