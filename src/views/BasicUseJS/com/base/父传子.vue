<template>
  <div>
    parent
    <childhooks mytitle='首页'></childhooks>
  </div>
</template>

<script>
import childhooks from './components/childhooks.vue'
export default {
  components: {
    childhooks
  },
  setup () {
    return {}
  }
}
</script>

<style lang="scss" scoped></style>
