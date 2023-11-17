import { defineStore } from "pinia";
import axios from "axios";

export const useProductStore = defineStore({
  id: "product",
  state: () => ({
    products: [],
  }),
  actions: {
    async fetchProducts() {
      console.log("test")
      try {
        const response = await axios.get("http://localhost/api/products");
        this.products = response.data['hydra:member'];
        console.log(this.product)
      } catch (error) {
        console.error(error);
      }
    },
  },
});
