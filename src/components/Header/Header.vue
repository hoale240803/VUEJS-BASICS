<template>
  <div id="header">
    <h1>tao la ho {{ msg }}</h1>
    <navbar v-bind:title="titleHeader"></navbar>

    <h1>{{ title }}</h1>
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
import Navbar from "./Navbar/Navbar.vue";
import Settings from "./Settings/Settings.vue";

export default {
  name: "header",
  props: ["title", "msg"],

  components: {
    navbar: Navbar,
    settings: Settings
  },

  data() {
    console.log("day la this cua header", this);
    return {
      msgHeader: "dit me nmay",
      titleHeader: this.title + " va header nua 🚀"
    };
  }
};
</script>

<style scoped>
h1 {
  color: lightseagreen;
}
</style>
