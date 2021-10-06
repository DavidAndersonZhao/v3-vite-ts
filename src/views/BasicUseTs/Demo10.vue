<template>
    测试
    <h1>{{ msg }}</h1>
    <ul>
        <li v-for="product in products" :key="product.id">{{ product.title }}</li>
    </ul>
</template>
  
  <script setup lang="ts">
import { defineProps } from "vue";
defineProps({
    msg: String,
    // info: {
    //   type: Object as PropType<PersonInfo>,
    //   required: true
    // }
});
import useProducts from "@/models/products"
const { products } = await useProducts();
console.log('products: ', products.value);

</script>