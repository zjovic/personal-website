<template>
  <section>
    <div class="textBox">
      <div class="greeting"></div>
      <div class="mobile-greeting" v-for="(item, index) in items" v-bind:key="index">
        <h1>{{item.message}}</h1>
      </div>
      <div class="typerr-box">
        <span ref="textField"></span>
        <span class="blinking-cursor">|</span>
      </div>

      <div class="social">
        <ul>
          <li v-for="(item, index) in social" v-bind:key="index">
            <a
              v-bind:href="item.href"
              v-bind:rel="item.rel"
              v-bind:target="item.target"
              v-bind:aria-label="item.aria"
            >
              <component v-bind:is="item.icon"></component>
            </a>
          </li>
        </ul>
      </div>
      <div class="cv">
        <a
          href="/cv_zvonimir_jovic.pdf"
          download
          target="_blank"
          aria-label="Download CV"
        >Download print friendly CV</a>
      </div>
    </div>
  </section>
</template>

<script>
import FaceBookIcon from "../Svg/FaceBookIcon";
import LinkedInIcon from "../Svg/LinkedInIcon";
import GitHubIcon from "../Svg/GitHubIcon";
import MailIcon from "../Svg/MailIcon";

export default {
  components: {
    "icon-facebook": FaceBookIcon,
    "icon-linkedin": LinkedInIcon,
    "icon-github": GitHubIcon,
    "icon-mail": MailIcon
  },

  mounted: function() {
    setTimeout(() => {
      this.outerr();
    }, 5000);
  },

  data() {
    return {
      items: [
        {
          message:
            "Hi there! I'm Zvonimir, a developer and designer from Croatia."
        },
        {
          message:
            "I enjoy creating simple, performant and meaningful things on the web."
        },
        {
          message:
            "Hopefully, one day, I'll create something even my mom can use."
        },
        {
          message:
            "If you would like to work with me, I'd like to hear from you."
        }
      ],
      txtCounter: 0,
      i: 0,
      social: [
        {
          href: "https://www.facebook.com/zvone.jovic",
          rel: "noreferrer",
          target: "_blank",
          aria: "Facebook",
          icon: "icon-facebook"
        },
        {
          href: "https://www.linkedin.com/in/zvonimir-jovi%C4%87-645ab1107/",
          rel: "noreferrer",
          target: "_blank",
          aria: "Linkedin",
          icon: "icon-linkedin"
        },
        {
          href: "https://github.com/zjovic",
          rel: "noreferrer",
          target: "_blank",
          aria: "Github",
          icon: "icon-github"
        },
        {
          href: "mailto:zvonimir.jovic.ri@gmail.com",
          rel: "noreferrer",
          target: "_blank",
          aria: "Facebook",
          icon: "icon-mail"
        }
      ]
    };
  },

  methods: {
    outerr: function() {
      if (this.txtCounter === this.items.length) {
        return;
      } else {
        this.$refs.textField.innerHTML = "";
        this.inerr();
      }
    },

    inerr: function() {
      let txtArray = this.items[this.txtCounter].message.split("");
      let maxInnerLoops = txtArray.length;
      let that = this;
      for (
        let symbolCounter = 0;
        symbolCounter < maxInnerLoops;
        symbolCounter++
      ) {
        setTimeout(function() {
          that.$refs.textField.innerHTML += txtArray[symbolCounter];
        }, symbolCounter * 80);
      }

      setTimeout(() => {
        this.deletrr();
        this.insertrr(this.items[this.i].message);
        this.i++;
      }, 8000);

      this.txtCounter++;

      setTimeout(() => {
        this.outerr();
      }, 12000);
    },

    deletrr: function() {
      const delArray = this.$refs.textField.innerHTML.split("");
      let reps = delArray.length;
      let that = this;

      for (let i = 0; i < reps; i++) {
        setTimeout(function() {
          delArray.pop();
          that.$refs.textField.innerHTML = delArray.join("");
        }, i * 50);
      }
    },

    insertrr: function(text) {
      const greeting = document.querySelector(".greeting");
      const textFromBox = document.createElement("H1");

      setTimeout(function() {
        greeting.appendChild(textFromBox);
        textFromBox.classList.add("invisible");
        textFromBox.innerHTML = text;
        setTimeout(function() {
          textFromBox.classList.remove("invisible");
        }, 100);
      }, 100);
    }
  }
};
</script>

<style lang="scss">
@import "./Textbox.scss";
</style>
