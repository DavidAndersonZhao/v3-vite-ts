<template>
  <div>
    <input type="text" v-model="mytext" />
    <ul>
      <li v-for="item in computedList" :key="item">
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script>
import { ref, onMounted, computed } from 'vue'
export default {
  setup () {
    const mytext = ref('')
    const list = ref([])
    const computedList = computed(() => {
      const newlist = list.value.filter(item => item.includes(mytext.value))// 查找字符串是否包含
      return newlist
    })
    // onMounted(() => {
    //   fetch('/test.json')
    //     .then(res => ref.json())
    //     .then(res => {
    //       console.log(res)
    //       list.value = res.list
    //     })
    // })
    onMounted(() => {
      fetch('/test.json')
        .then(res => res.json())
        .then(res => {
          console.log(res)
          list.value = res.list
        })
    })
    return {
      mytext,
      computedList
    }
  }
}
</script>

<style lang="scss" scoped></style>
