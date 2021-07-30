<template>
  <div id="test">
    <h1>Navbar :::: My Props is {{ title }}</h1>

    <h2>hihi {{ title }}</h2>
  </div>
</template>

<script>
export default {
  props: ["title"],

  data() {
    return {};
  }
};
</script>

<style scoped>
h1 {
  color: red;
}
</style>
