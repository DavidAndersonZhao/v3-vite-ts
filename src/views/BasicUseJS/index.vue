<template>
  <div>
    <div class="xian"></div>
    <div style="display: flex">
      <div @click="handleClick(1)" :class="value == 1&&'red'" style="flex: 1">js写法</div>
      <div @click="handleClick(2)" :class="value == 2&&'red'" style="flex: 1">ts写法</div>
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
          <div v-if="activeName == item.name">
            <component :is="item.components"></component>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
    <div v-else>
      <el-tabs v-model="activeNameTs" @tab-click="tsTabClick">
        <el-tab-pane
          v-for="item in tsTabs"
          :key="item.name"
          :label="item.label"
          :name="item.name"
        >
          <div v-if="activeNameTs == item.name">
            <component :is="item.components"></component>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<script lang="ts">
// import { defineComponent } from "vue";
import { ref } from "vue";

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

// TS
import helloWorldTs from "@/views/BasicUseTS/helloWorld.vue";
import BasicTs from "@/views/BasicUseTS/Basic.vue";
import Demo1 from "@/views/BasicUseTS/Demo1.vue";
import Demo2 from "@/views/BasicUseTS/Demo2.vue";
import Demo3 from "@/views/BasicUseTS/Demo3.vue";
import Demo4 from "@/views/BasicUseTS/Demo4.vue";
import Demo5 from "@/views/BasicUseTS/Demo5.vue";
import Demo6 from "@/views/BasicUseTS/Demo6.vue";
import Demo7 from "@/views/BasicUseTS/Demo7.vue";
import Demo8 from "@/views/BasicUseTS/Demo8.vue";
import Demo9 from "@/views/BasicUseTS/Demo9.vue";
import Demo10 from "@/views/BasicUseTS/Demo10.vue";
// import Demo8New from "@/views/BasicUseTS/Demo8New.vue";

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
let activeName = ref("first");
let activeNameTs = ref("first");
let value = ref(1);

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
const tsTabs: TabOption[] = [
  {
    label: "helloWorld",
    name: "first",
    components: helloWorldTs,
  },
  {
    label: "basic",
    name: "secound",
    components: BasicTs,
  },
  {
    label: "reactive&computed",
    name: "third",
    components: Demo1,
  },
  {
    label: "toRefs",
    name: "fourth",
    components: Demo2,
  },
  {
    label: "ref",
    name: "fifth",
    components: Demo3,
  },
  {
    label: "computed",
    name: "sixth",
    components: Demo4,
  },
  {
    label: "computed",
    name: "seventh",
    components: Demo4,
  },
  {
    label: "watch",
    name: "eighth",
    components: Demo5,
  },
  {
    label: "watchEffect",
    name: "ninth",
    components: Demo6,
  },
  {
    label: "生命周期",
    name: "tenth",
    components: Demo7,
  },
   {
    label: "provide",
    name: "eleventh",
    components: Demo8,
  },
   {
    label: "onMounted",
    name: "twelfth",
    components: Demo9,
  },
    {
    label: "hooks",
    name: "thirteenth",
    components: Demo10,
  },
  //  {
  //   label: "useSSRContext",
  //   name: "twelfth",
  //   components: Demo8New,
  // },
];
const handleClick = (num: number) => {
  value.value = num;
};
const tabClick = (tab, event: Event) => {
  activeName = tab;
  // console.log(tab, event, activeName);
};
const tsTabClick = (tab, event: Event) => {
  activeNameTs = tab;
  // console.log(tab, event, activeNameTs);
};
</script>

<style scoped>
.xian {
  height: 10px;
  background: red;
}
.red{
  color: red;
}
</style>
