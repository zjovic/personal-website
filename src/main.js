import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import Routes from "./routes";

Vue.config.productionTip = false;

Vue.use(VueRouter);

export const EventBus = new Vue();

const router = new VueRouter({
  routes: Routes,
  mode: "history",
  linkExactActiveClass: "is-active"
});

export const bus = new Vue();

new Vue({
  render: h => h(App),
  router: router
}).$mount("#app");
