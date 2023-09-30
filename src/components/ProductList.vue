<script setup>
import { useProductStore } from '../stores/TodoStore';
import Product from './Product.vue';
import { computed } from 'vue';
const store = useProductStore()


const filteredProducts = computed(() => {
    let products = store.products
    return products
})
</script>
<template>
    <section class="bg-gray-100 py-20">
        <div class="container mx-auto px-4">
            <h1 class="text-2xl font-bold mb-10">Welcome to CFS Market ,</h1>
            <div class="grid grid-cols-2 md:grid-cols-4 gap-y-1 gap-x-1">

                <Product v-for="product in filteredProducts" :product-name="product.title" :key="product.id"
                    :price="product.price" :product-img="product.image" :id="product.id"></Product>
                <h1 v-show="filteredProducts.length === 0">There are no products in this category..</h1>
            </div>
        </div>
    </section>
</template>
