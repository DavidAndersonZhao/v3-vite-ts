<template>
  <div>
    <!-- ref watch -->
   mytext--<input type="text" v-model="mytext" />
   <div>
     myname监视mytext变化--{{myname}}
   </div>
  </div>
</template>

<script>
import { ref, watch, reactive, toRefs } from 'vue'
export default {
  setup () {
    const mytext = ref('')
    const state = reactive({
      myname: 'tom'
    })
    watch(mytext, () => {
      console.log(mytext.value)
      state.myname = mytext.value
    })

    watch(
      () => state.myname,
      (newValue, oldValue) => {
        console.log('---myname', state.myname, newValue, oldValue)
      }
    )

    return {
      mytext,
      ...toRefs(state)
    }
  }
}
</script>

<style lang="scss" scoped></style>
