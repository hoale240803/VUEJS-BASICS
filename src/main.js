import Vue from "vue";
import App from "./App.vue";
import Test from "./components/Test.vue";
import Test1 from "./components/Test1.vue";
import Header from "./components/Header/Header.vue";

Vue.component("test", Test);
Vue.component("test1", Test1);
Vue.component("c", Header);

new Vue({
  el: "#app",
  render: h => h(App)
});
