<template>
  <nav v-bind:class="{open:navOpen}">
    <div class="top">
      <router-link to="/" class="overlay">
        <span class="home">zvonimir.litax.hr</span>
      </router-link>
      <span v-on:click="toggleProp()" class="close overlay">X</span>
    </div>
    <div class="bottom">
      <ul>
        <li v-on:click="resCloser()">
          <router-link to="/work" class="nav-link">
            <icon-work></icon-work>
            <span>Work</span>
          </router-link>
        </li>
        <li v-on:click="resCloser()">
          <router-link to="/scribbles" class="nav-link">
            <icon-scribbles></icon-scribbles>
            <span>Scribbles</span>
          </router-link>
        </li>
        <li v-on:click="resCloser()">
          <router-link to="/skills" class="nav-link">
            <icon-skills></icon-skills>
            <span>Skills</span>
          </router-link>
        </li>
        <li v-on:click="resCloser()">
          <router-link to="/about" class="nav-link">
            <icon-about></icon-about>
            <span>About me</span>
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import WorkIcon from "../Svg/WorkIcon";
import ScribblesIcon from "../Svg/ScribblesIcon";
import SkillsIcon from "../Svg/SkillsIcon";
import AboutIcon from "../Svg/AboutIcon";

export default {
  components: {
    "icon-work": WorkIcon,
    "icon-scribbles": ScribblesIcon,
    "icon-skills": SkillsIcon,
    "icon-about": AboutIcon
  },

  props: {
    navOpen: Boolean
  },

  data() {
    return {
      //navOpenChild: false
    };
  },
  methods: {
    toggleProp: function() {
      //this.navOpenChild = !this.navOpenChild;
      //this.$emit("navToggleChanged", this.navOpenChild);
      this.$emit("navToggleChanged", false);
    },

    //IF BELOW 900px CLOSE NAV WHEN CLICKING ON LINK
    resCloser: function() {
      let screenWidth = document.body.offsetWidth;

      if (screenWidth <= 900) {
        this.toggleProp();
      } else {
        return;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "./Nav.scss";
</style>