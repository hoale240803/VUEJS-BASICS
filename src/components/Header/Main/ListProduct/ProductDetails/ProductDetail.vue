<template>
  <li>
    <span> {{ product.name }}|{{ product.price }} | 🚗 </span>
    <button v-on:click="deleteItemPD(id)">Delete</button>
  </li>
</template>

<script>
export default {
  props: ["product", "deleteItem"],
  methods: {
    deleteItemPD: function(id) {
      this.$emit("deleteItemPD", id);
    }
  }
};
</script>

<style scroped></style>
