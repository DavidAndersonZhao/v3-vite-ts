<template>
    <h1>{{ theme }}</h1>
</template>
  
<script lang="ts">
import { defineComponent, inject, Ref, watchEffect } from "vue";
export default defineComponent({
    name: "Child",
    setup() {
        /**
         * 子组件想要使用（inject）test，需要父组件提供provide（这里用watchEffect进行引用）
         */
        const theme = inject("test", "京程一灯"); 
        watchEffect(() => {
            console.log("主题被修改了", (theme as unknown as Ref<string>).value)
        })
        return {
            theme
        }
    }
})
</script>