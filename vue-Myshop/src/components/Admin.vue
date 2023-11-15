<template>
    <div>
      <table id="basic-data-table" class="table custom-table">
        <thead>
          <tr>
            <th scope="col">Product</th>
            <th scope="col">ID</th>
            <th scope="col">Category</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(product, index) in products" :key="index">
            <td>{{ product.name }}</td>
            <td>{{ product.id }}</td>
            <td :style="{ width: product.categoryWidth + '%' }">{{ product.category }}</td>
            <td>
              <button @click="deleteProduct(index)" class="btn btn-danger btn-sm">Delete</button>
              <button @click="editProduct(index)" class="btn btn-warning btn-sm">Edit</button>
            </td>
          </tr>
        </tbody>
      </table>
  
      <div class="add-category-form">
        <label for="newCategory">New Category:</label>
        <input type="text" v-model="newCategory" />
        <button @click="addCategory" class="btn btn-primary btn-sm">Add Category</button>
      </div>
  
      <div v-if="editedProductIndex !== null" class="edit-product-form">
        <label for="editedProductName">Name:</label>
        <input type="text" v-model="editedProductName" />
        <label for="editedProductCategory">Category:</label>
        <input type="text" v-model="editedProductCategory" />
        <button @click="saveEditedProduct" class="btn btn-success btn-sm">Save</button>
        <button @click="cancelEdit" class="btn btn-secondary btn-sm">Cancel</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Admin',
    data() {
      return {
        products: [
          { name: 'Air max 95', id: 1, category: 'Chaussures', categoryWidth: 25 },
          // Ajouter plus de produits 
        ],
        newCategory: '',
        editedProductIndex: null,
        editedProductName: '',
        editedProductCategory: '',
        editedProductCategoryWidth: 0,
      };
    },
    methods: {
      deleteProduct(index) {
        this.products.splice(index, 1);
      },
      addCategory() {
        if (this.newCategory.trim() !== '') {
          this.products.push({ name: '', id: this.products.length + 1, category: this.newCategory, categoryWidth: 25 });
          this.newCategory = '';
        }
      },
      editProduct(index) {
        this.editedProductIndex = index;
        this.editedProductName = this.products[index].name;
        this.editedProductCategory = this.products[index].category;
        this.editedProductCategoryWidth = this.products[index].categoryWidth;
      },
      saveEditedProduct() {
        if (this.editedProductIndex !== null) {
          this.products[this.editedProductIndex].name = this.editedProductName;
          this.products[this.editedProductIndex].category = this.editedProductCategory;
          this.products[this.editedProductIndex].categoryWidth = this.editedProductCategoryWidth;
          this.cancelEdit();
        }
      },
      cancelEdit() {
        this.editedProductIndex = null;
        this.editedProductName = '';
        this.editedProductCategory = '';
        this.editedProductCategoryWidth = 0;
      },
    },
  };
  
  </script>
  
  <style scoped>
 
  
  .custom-table {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 20px;
  }
  
  .custom-table th, .custom-table td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
  }
  
  .category-cell {
    width: 25%; 
  }
  
  .btn-sm {
    padding: 5px 10px;
  }
  
  .add-category-form {
    margin-top: 20px;
  }
  
  .edit-product-form {
    margin-top: 20px;
    border: 1px solid #ddd;
    padding: 10px;
  }
  </style>