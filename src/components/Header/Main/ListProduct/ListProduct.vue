<template>
  <div>
    <h1>List Product 🍞</h1>
    <ul id="listProduct">
      <productdetails
        v-for="(product, index) in listProduct"
        :key="product.id"
        v-bind:product="product"
        v-bind:index="index"
        v-on:deleteItemPD="deleteItem"
      ></productdetails>
    </ul>
  </div>
</template>

<script>
import ProductDetails from "./ProductDetails/ProductDetail.vue";
export default {
  name: "listproduct",
  components: {
    productdetails: ProductDetails
  },
  methods: {
    deleteItem: function(id) {
      this.listProduct.splice(id, 1);
      alert("deleted product id: ", id);
    }
  },
  data() {
    return {
      listProduct: [
        { id: "01", name: "banh", price: "12" },
        { id: "02", name: "keo", price: "10" },
        { id: "03", name: "sua", price: "14" }
      ]
    };
  }
};
</script>

<style scroped>
#listProduct {
  display: flex;
  flex-direction: column;
}
</style>
