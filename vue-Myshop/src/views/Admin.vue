<template>
  <div>
    <h1>Produits</h1>
    <button @click="addProduct(product.id)">add</button>
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
import { useproductstore } from "../stores/adminn";
import axios from 'axios'

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
   
    deleteProduct(id) {
  const token = "votre_bearer_token"; // Remplacez "votre_bearer_token" par votre véritable bearer token

  axios.delete(`http://localhost/api/products/${id}`, {
    headers: {
      Authorization: `Bearer ${'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE3MDAyNDY4MzEsImV4cCI6MTcwMDI1MDQzMSwicm9sZXMiOlsiUk9MRV9BRE1JTiIsIlJPTEVfVVNFUiJdLCJ1c2VybmFtZSI6ImVhcmx5aXRhaGFoQGdtYWlsLmNvbSJ9.ahNLlqdKbivVrrl9bXMv5iPNIcs4GiZPDzTkX-_H-yMMeC2pSEaC1dR6OVHMaKzEwbni17XBE4P21jduY4Mp-UH-NSKlHCt7mAkQ4-NyJIMoko-_srcNy43sQMQG7u81cCZ7Ja6EAvw5i8XK1pFrPzcIP3QnMmf3YAlT4bILzv8YYRz9rGJGiwU3puA5ZkbwmbkjKftioWhZkO0LS8FuA1eeCdeCBIYx5jqWlkmwznYUoE781-wBJBbeh3asWvUE3Jo9ZwJ_eM_gc9d2Sv7RSDDvArThIIIY-QdLPsYvZpN4pdi878ry2ldvonbOFk4gq7G-a8_HJFAx-SuO3n5lvg'}`
    }
  })
    .then(response => {
      console.log("Delete product", response);
      // Ajoutez ici la logique pour mettre à jour votre liste de produits
    })
    .catch(error => {
      console.error("Error deleting product", error);
    });
},

addProduct(id) {
  
}

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
  
  
  
  
  
  
  

