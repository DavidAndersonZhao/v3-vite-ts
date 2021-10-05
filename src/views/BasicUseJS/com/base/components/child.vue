<template>
  <div>child--{{ count }}</div>
</template>

<script>
import { useCount } from '../hooks/useCount'

export default {
  setup () {
    const { count } = useCount()
    return {
      count
    }
  }
}
</script>

<style lang="scss" scoped></style>
