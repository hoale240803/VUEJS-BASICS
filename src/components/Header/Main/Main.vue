<template>
  <listproduct></listproduct>
</template>

<script>
import ListProduct from "./ListProduct/ListProduct.vue";
export default {
  name: "main",
  components: {
    listproduct: ListProduct
  },
  data() {
    return {
      title: "i'm Main comp"
    };
  }
};
</script>

<style scroped></style>
