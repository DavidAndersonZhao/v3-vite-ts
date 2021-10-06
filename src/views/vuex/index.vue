<template>
  <div>
    detail
  </div>
</template>

<script>
import { useRoute, useRouter } from 'vue-router'
import { onMounted, onUnmounted } from 'vue'
import { useStore } from 'vuex'
export default {
  setup () {
    // 获取列表页面传来的id,利用此id进行数据请求
    const route = useRoute()
    const router = useRouter()
    const store = useStore()
    onMounted(() => {
      console.log(route.params.id)
      store.commit('hide')
    })
    onUnmounted(() => {
      store.commit('show')
    })
  
    return {
    }
  }
}
</script>

<style lang="scss" scoped></style>
