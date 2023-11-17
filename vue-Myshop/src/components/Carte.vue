<template>
  <div class="product">
    <!-- <img :src="product.image" :alt="product.name"> -->
    <h2>{{ product.name }}</h2>
    <p class="description">{{ product.description }}</p>
    <p class="price">{{ product.price }}</p>
   
  </div>
</template>

<script>
export default {
    props: {
      product: {
        type: Object,
        required: true
      }
    }
  }
</script>

<style>
.product {
  width: 45%;
  margin-bottom: 20px;
  padding: 20px;
}

.product img {
  width: 100%;
  height: auto;
  margin-bottom: 10px;
}

.product h2 {
  font-size: 1.2rem;
  margin-bottom: 10px;
}

.product .description {
  font-size: 0.9rem;
  margin-bottom: 10px;
}

.product .price {
  font-size: 1.1rem;
  font-weight: bold;
  margin-bottom: 10px;
}

.product button {
  background-color: #f0c040;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.product button:hover {
  background-color: #e0b030;
}
</style>