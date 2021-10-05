<template>
  <div>
    todoList
    <ul>
      <input v-model="state.mytext" />
      <button @click="handleClick">add</button>
      <li v-for="(item, index) in state.datalist" :key="item">
        {{ item }}-----<button @click="delClick(index)">del</button>
      </li>
    </ul>
  </div>
</template>

<script>
import { reactive } from "vue";

export default {
  setup() {
    const state = reactive({
      mytext: "",
      datalist: ["111", "222", "333"],
    });
    const handleClick = () => {
      state.datalist.push(state.mytext);
      state.mytext = "";
    };
    const delClick = (index) => {
      state.datalist.splice(index, 1);
    };
    return {
      state,
      handleClick,
      delClick,
    };
  },
};
</script>

<style lang="scss" scoped></style>
