<template>
  <div>childhooks-{{ mytitle }}--{{ mytext }}</div>
</template>

<script>
import { ref } from 'vue'
export default {
  props: ['mytitle'],
  setup (props) {
    const mytext = ref(props.mytitle + '111111')
    return {
      mytext
    }
  }
}
</script>

<style lang="scss" scoped></style>
