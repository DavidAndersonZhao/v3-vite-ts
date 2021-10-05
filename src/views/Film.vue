<template>
  <div>
    <ul>
      <div
        v-for="item in state.list"
        :key="item.filmId"
        @click="handleClick(item.filmId)"
      >
        <img :src="item.poster" alt="" />
        <div>{{ item.name }}</div>
      </div>
    </ul>
  </div>
</template>

<script>
// getCurrentInstance 这个就像v2中的this
// 用法 const { ctx } = getCurrentInstance();  console.log(ctx) // ctx.$router 就是 路由对象的实例
import { onMounted, reactive, getCurrentInstance } from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios'
export default {
  setup () {
    const state = reactive({
      list: []
    })
    const { ctx } = getCurrentInstance()
    console.log(ctx)// ctx.$router 就是路由对象的实例

    const router = useRouter()
    onMounted(() => {
      axios({
        url:
          'https://m.maizuo.com/gateway?cityId=310100&pageNum=1&pageSize=10&type=1&k=101035',
        headers: {
          'X-Client-Info':
            '{"a":"3000","ch":"1002","v":"5.0.4","e":"1596502176387264316178433"}',
          'X-Host': 'mall.film-ticket.film.list'
        }
      }).then(res => {
        console.log(res.data)
        state.list = res.data.data.films
      })
    })

    const handleClick = (id) => {
      console.log(id, ctx.$router)
      //   ctx.$router.push(`/detail/${id}`) 不推荐
      console.log(router)
      router.push(`/detail/${id}`)
    }
    return {
      state,
      handleClick
    }
  }
}
</script>

<style lang="scss" scoped></style>
