<template>
  <div class="product-grid">
    <p>teststett</p>
    <button v-on:click="console">test</button>
    <Carte
      class="product-card"
      v-for="product in products"
      :key="product.id"
      :product="product"
    />
  </div>
</template>

<script>
import Carte from "../components/Carte.vue";
import { useProducts } from "../stores/counter";
import { mapActions, mapState } from "pinia";

export default {
  components: {
    Carte,
  },
  async mounted() {
    await this.fetchProduct();
  },
  computed: {
    ...mapActions(useProducts, ["fetchProduct"]),
    ...mapState(useProducts, ["getProducts"]),
    products() {
      return this.getProducts?.data?.["hydra:member"] ?? [];
    },
  },
};
</script>

<style scoped>
.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
}
</style>