<template>
  <div>
    todoRef
    <ul>
      <!-- <input v-model="state.mytext" /> -->
      <input type="text" ref="mytext" />
      <button @click="handleClick">add</button>
      <li v-for="(item, index) in state.datalist" :key="item">
        {{ item }}-----<button @click="delClick(index)">del</button>
      </li>
    </ul>
  </div>
</template>

<script>
import { reactive, ref } from "vue";

export default {
  setup() {
    const state = reactive({
      mytext: "",
      datalist: ["111", "222", "333"],
    });

    const mytext = ref("");

    const handleClick = () => {
      console.log(mytext.value); // mytext.value拿到原声节点 这里的ref同v2的ref
      console.log(mytext.value.value);
      state.datalist.push(mytext.value.value);
      mytext.value.value = "";
    };
    const delClick = (index) => {
      state.datalist.splice(index, 1);
    };
    return {
      mytext,
      state,
      handleClick,
      delClick,
    };
  },
};
</script>

<style lang="scss" scoped></style>
