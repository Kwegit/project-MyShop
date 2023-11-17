<template>
    <div>
      <h1>Produits</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Product</th>
            <th>Category</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
            <tr v-for="product in getproduct.data['hydra:member']" :key="product.id">
            <td>{{ product.id }}</td>
            <td>{{ product.name }}</td>
            <td>{{ product.category }}</td>
            <td>
              <button @click="editProduct(product)">Edit</button>
              <button @click="deleteProduct(product.id)">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  import { mapActions, mapState } from "pinia";
  import { useproductstore } from "../stores/counter";
  
  export default {
    data() {
      return {};
    },
    mounted() {
      this.fetchproduct();
    },
    computed: {
      ...mapActions(useproductstore, ["fetchproduct"]),
      ...mapState(useproductstore, ["getproduct"]),
    },
    methods: {
      editProduct(product) {
        // Ajoute ici la logique pour l'édition du produit
        console.log("Edit product", product);
      },
      deleteProduct(productId) {
        // Ajoute ici la logique pour la suppression du produit
        console.log("Delete product", productId);
      },
    },
  };
  </script>
  
  <style>
  table {
    border-collapse: collapse;
    width: 100%;
  }
  
  th, td {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
  }
  
  th {
    background-color: #f2f2f2;
  }
  
  button {
    padding: 5px 10px;
    cursor: pointer;
  }
  </style>
  
  
  
  
  
  
  

