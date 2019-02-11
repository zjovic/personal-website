<template>
  <section>
    <div class="skills">
      <h3>Skills and Tools</h3>
      <ul v-for="(item, index) in skills" v-bind:key="index">
        <li>
          <span>{{item.skill}} -</span>
          {{item.description}}
        </li>
      </ul>
    </div>
    <div class="skills">
      <h3>Soft skills</h3>
      <ul v-for="(item, index) in soft" v-bind:key="index">
        <li>
          <span>{{item.skill}} -</span>
          {{item.description}}
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      skills: [
        {
          skill: "HTML5",
          description:
            "Semantic, performant, cross-browser compatible websites, modern HTML5 APIs, experience with ARIA compliant applications"
        },
        {
          skill: "CSS3 & UX",
          description:
            "Sass, responsive design, mobile optimization, Grid and Flexbox experience, Bootstrap, Tailwind"
        },
        {
          skill: "JavaScript",
          description:
            "Front-end vanilla JavaScript, experience building modular code for JavaScript applications, SPAs. Experience with libraries and frameworks: jQuery, Underscore and Vue"
        },
        {
          skill: "UI & design",
          description: "Photoshop, Illustrator, InDesign, AdobeXD, Figma"
        },
        {
          skill: "CMS",
          description: "Wordpress"
        },
        {
          skill: "Dev tools",
          description: "Visual studio code, Git, Codepen, npm, Webpack"
        }
      ],

      soft: [
        {
          skill: "Written and oral communication",
          description:
            "I understand the importance of good communication. I use tools like Slack to make sure we're always on the same page. I'm skilled at conveying complex topics to team members and I'm able to communicate with clients comfortably and explain technical concepts in a nontechnical way"
        },
        {
          skill: "Organization",
          description:
            "Whether working remotely or in the office, I believe it's important to stay organized. I use tools like Trello and Asana to keep my projects on track"
        },
        {
          skill: "Time management",
          description: "I value my client's time as much as I value my own"
        },
        {
          skill: "Design",
          description:
            "Although I don't consider myself a graphic designer, I'm comfortable with creating mockups and turning them into code"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
@import "./Skills.scss";
</style>