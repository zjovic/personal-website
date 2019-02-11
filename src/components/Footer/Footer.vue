<template>
  <footer>
    <p>&copy; 2019 Zvonimir Jović</p>
    <router-link to="/" class="footer-link">Home</router-link>
    <router-link to="/work" class="footer-link">Work</router-link>
    <router-link to="/scribbles" class="footer-link">Scribbles</router-link>
    <router-link to="/skills" class="footer-link">Skills</router-link>
    <router-link to="/about" class="footer-link">About me</router-link>
  </footer>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
@import "./Footer.scss";
</style>
