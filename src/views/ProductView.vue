<script setup>


import { onMounted, ref } from 'vue';
import Navbar from '../components/Navbar.vue';
import { useProductStore } from '../stores/TodoStore';
import { useRoute } from 'vue-router';
import axios from "axios";

let addProduct = ref(false)
const store = useProductStore()

console.log(store.products);

const route = useRoute()
const productId = route.params.productId
const selectedProduct = store.products.filter(element => element.id == productId)

console.log(productId);

console.log(selectedProduct);

onMounted(() => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // This enables smooth scrolling
    });
})


</script>
<template v-if="selectedProduct">
    <Navbar></Navbar>
    <div class="container mx-auto px-4 py-8">
        <div class="lg:flex">
            <!-- Shoe Image -->
            <div class="lg:w-1/2">
                <img :src="selectedProduct[0].image" alt="Shoe" class="w-full object-contain mx-hight">
            </div>

            <!-- Shoe Details -->
            <div class="lg:w-1/2 lg:pl-8">
                <h1 class="text-2xl font-bold mb-4">{{ selectedProduct[0].title }}</h1>


                <!-- Size Selector -->
                <div class="mb-4">
                    <label for="size" class="text-lg font-medium">Select Size:</label>
                    <select id="size"
                        class="block w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <option value="7">39</option>
                        <option value="8">40</option>
                        <option value="9">41</option>
                        <option value="10">42</option>
                    </select>
                </div>

                <!-- Color -->


                <p class="text-gray-600 mb-4">${{ selectedProduct[0].price }}</p>

                <a @click="store.addToCart(selectedProduct[0].id), addProduct = !addProduct"
                    :class="addProduct ? 'bg-green-600 disabled-link' : ''"
                    class="cursor-pointer flex items-center justify-center md:w-[412px] rounded-md bg-gray-900 px-5 py-2.5 text-center text-sm font-medium text-white  focus:outline-none focus:ring-4 focus:ring-blue-300">
                    <svg xmlns="http://www.w3.org/2000/svg" class="mr-2 h-6 w-6" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>

                    {{ addProduct ? "Added to Cart!" : 'Add to Cart' }}</a>

            </div>
        </div>

    </div>
</template>
<style scoped>
.mx-hight {
    max-height: 550px;
}
</style>