import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios';
 
export const useproductstore = defineStore('product', {
 
  state : () => {
    return{
      product : []
    }
import { ref, computed } from "vue";
import { defineStore } from "pinia";
import axios from "axios";

export const useProducts = defineStore("product", {
  state: () => {
    return {
      product: [],
      status: "init",
    };
  },
  getters: {
    getProducts: (state) => state.product,
    getStatus: (state) => state.status,
  },
  actions: {
    async fetchProduct() {
      this.status = "featching";
      this.product = await axios({
        url: "http://localhost/api/products",
        method: "get",
      }).then((res) => {console.log(res.data); return res.data;}) 
      .catch((err) => {
        console.log(err);
      });
      this.status = "done";
      //   .data;
      //   console.log(products);
    },
  },
});

