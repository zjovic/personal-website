<template>
  <header>
    <div class="left">
      <router-link to="/" class="avatar-link">
        <img src="../../assets/img/logo_reverse.png" class="avatar" alt="Zvonimir Jović">
      </router-link>
      <div class="info">
        <p>Zvonimir Jović</p>
        <p>Developer & Designer</p>
        <p>zvonimir.jovic.ri@gmail.com</p>
      </div>
    </div>
    <button v-on:click="navOpen = !navOpen" class="open-nav" aria-label="Open navigation">
      <icon-grid></icon-grid>
    </button>
    <app-nav v-bind:navOpen="navOpen" v-on:navToggleChanged="navOpen = $event"></app-nav>
  </header>
</template>

<script>
import Nav from "../Nav/Nav";
import GridIcon from "../Svg/GridIcon";

export default {
  components: {
    "app-nav": Nav,
    "icon-grid": GridIcon
  },
  data() {
    return {
      navOpen: false
    };
  }
};
</script>

<style lang="scss" scoped>
@import "./Header.scss";
</style>
