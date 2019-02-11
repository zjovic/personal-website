<template>
  <div>
    <app-header></app-header>
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
    <app-footer></app-footer>
    <app-notifications></app-notifications>
  </div>
</template>

<script>
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Notifications from "./components/Notifications/Notifications";

export default {
  components: {
    "app-header": Header,
    "app-footer": Footer,
    "app-notifications": Notifications
  },

  data() {
    return {};
  }
};
</script>
<style lang="scss">
body {
  display: flex;
  flex-direction: column;
  color: #fff;
  font-size: 16px;
  line-height: 1.5em;
  font-family: "Montserrat", Arial, Helvetica, sans-serif;
  background-color: $color-dark;
}
</style>

