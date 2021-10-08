<template>
  <div>
    <div class="frame">
      <div class="title">{{props.title}}</div>
    </div>
    <div class="row">
      <a-row>
        <a-col
          v-for="(item, index) in props.list"
          :key="index"
          :span="8"
          style="margin-bottom: 10px"
          @click="handleClick(item)"
        >
          <component
            :is="item.component"
            style="margin-right: 10px"
          ></component>
          {{ item.text }}</a-col
        >
      </a-row>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  list: Array,
  title:String
});
const emit = defineEmits(['handleClick'])
const handleClick = (item)=>{
    emit("myClick", item)
}
</script>

<style lang="scss" scoped>
.frame {
  //   border-bottom: 1px solid #b2a4a4b3;
  padding-bottom: 15px;
  margin-top: 15px;
  .title {
    border-left: 5px solid #888;
    font-weight: 600;
    font-size: 18px;
    padding-left: 10px;
    text-align: left;
  }
}
.row {
  padding-left: 15px;
  border-bottom: 1px solid #b2a4a4b3;
  padding-bottom: 20px;
  font-size: 16px;
}
</style>
