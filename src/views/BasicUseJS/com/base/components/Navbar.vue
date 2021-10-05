<template>
  <div>navbar-<button @click="handleClick">navbar按钮</button></div>
</template>

<script>
export default {
  setup (props, { emit }) { // 拿到事件 传给父组件
    console.log(emit)

    const handleClick = () => {
      emit('event')
    }
    return {
      handleClick
    }
  }
}
</script>

<style lang="scss" scoped></style>
