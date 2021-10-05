<template>
  <div>
    <!-- ref watch -->
    <input type="text" v-model="mytext" />
    <ul>
      <li v-for="item in list" :key="item">
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script>
import { ref, onMounted, watch } from 'vue'
export default {
  setup () {
    const mytext = ref('')
    const list = ref([])
    let newlist = []
    watch(mytext, () => {
      console.log(mytext.value)
      list.value = newlist.filter(item => item.includes(mytext.value))
    })

    onMounted(() => {
      fetch('/test.json')
        .then(res => res.json())
        .then(res => {
          console.log(res)
          list.value = res.list
          newlist = res.list
        })
    })
    return {
      mytext,
      list
    }
  }
}
</script>

<style lang="scss" scoped></style>
