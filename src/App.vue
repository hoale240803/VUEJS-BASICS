<template>
  <div>
    <app-header title="title cua app" msg="msg"></app-header>
    <!-- <test></test> -->
    <app-main></app-main>
  </div>
</template>

<script>
import Header from "./components/Header/Header.vue";
import Main from "./components/Header/Main/Main.vue";

export default {
  name: "app",
  components: {
    "app-header": Header,
    "app-main": Main
  },
  data() {
    return {
      msg: "dit me nmay",
      title: "props của header 🚀"
    };
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
