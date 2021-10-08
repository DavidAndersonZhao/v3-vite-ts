<template>
  <div></div>
  <div class="report">
    <div style="background: #ececec; padding: 30px">
      <div class="box">
        <div class="frame">
          <div class="title">O Report</div>
        </div>
        <div class="list" v-for="(item, index) in arrList" :key="index">
          <List :list="item.list" :title="item.title+(index+1)" @myClick="handleClick"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import List from "./com/list.vue";
import { LeftSquareOutlined } from "@ant-design/icons-vue";
const arrList = [
  {
    title: "title",
    list: [
      {
        component: LeftSquareOutlined,
        text: Math.random().toString(36).toString(2),
      },
      {
        component: LeftSquareOutlined,
        text: Math.random().toString(36).toString(2),
      },
      {
        component: LeftSquareOutlined,
        text: Math.random().toString(36).toString(2),
      },
      {
        component: LeftSquareOutlined,
        text: Math.random().toString(36).toString(2),
      },
    ],
  },
  {
    title: "title",
    list: [
      {
        component: LeftSquareOutlined,
        text: Math.random().toString(36).toString(2),
      },
      {
        component: LeftSquareOutlined,
        text: Math.random().toString(36).toString(2),
      },
    ],
  },
  {
    title: "title",
    list: [
      {
        component: LeftSquareOutlined,
        text: Math.random().toString(36).toString(2),
      },
    ],
  },
];
const handleClick = (data)=>{
    console.log(data);
}
</script>

<style lang="scss" scoped>
.report {
  background: #fff;
  padding: 20px 30px 20px 20px;
  .box {
    padding: 16px 50px 50px 20px;
    background: #fff;
    text-align: left;
    .frame {
      border-bottom: 1px solid #b2a4a4b3;
      padding-bottom: 15px;
      .title {
        border-left: 5px solid greenyellow;
        font-weight: 600;
        font-size: 18px;
        padding-left: 10px;
        text-align: left;
      }
    }
    .list {
      padding: 0 50px 0 10px;
    }
  }
}
</style>
