import { defineStore } from "pinia";
import axios from "axios";
import { ref } from "vue";

export const useTodoStore = defineStore("todo", {
  state: () => ({
    Todos: ref([{id : 1, task : 'Finish homework assignment', done : true}, {id : 2, task : 'Buy groceries', done : true}, {id : 3, task : 'Call mom', done : false},{id : 4, task : 'Plan a weekend trip', done : false}, {id : 5, task : 'Read a book', done : true}, {id : 6, task : 'Write a report', done : true}]),

  }),

  getters: {
    Tasks(){ return this.Todos}
  },

  actions: {
    // async getProducts() {
    //   const URL = "https://fakestoreapi.com/products";
    //   this.loading = true;
    //   const response = await axios.get(URL);
    //   this.products = await response.data;
    //   this.loading = false;
    // },
    // async addToCart(id) {
    //   const product = this.products.find((element) => element.id === id);
    //   if (!this.productsOnCart.includes(product))
    //     this.productsOnCart.push(product);
    // },

    // async clearCart() {
    //   this.productsOnCart = [];
    // },
  },
});
