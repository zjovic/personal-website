<template>
  <section>
    <div class="work">
      <h2>Work</h2>
      <p>
        Logo and UI design for SaaS startup
        <a href="http://feerma.eu/">Feerma</a>. Wordpress site for
        <a href="http://sos-rijeka.org/">SOS Rijeka</a>. Web site design and frontend development for
        <a href="http://www.garancija-gsv.com/">GSV</a>. Site design and architecture for
        <a href="https://dancestar.org/">DanceStar</a>. Documentation (requirement specification and user manuals) for Registration portal for
        <a
          href="http://www.eolsolutions.hr/"
        >EOL Solutions</a>. Frontend work for
        <a href="http://traven.hr/">Traven d.o.o.</a> Wordpress site for
        <a href="http://autoservis-mika.hr/">AS Mika</a>.
      </p>
      <div
        class="wrapper"
        v-for="(item, index) in work"
        v-bind:key="index"
        v-on:click="item.show = !item.show"
      >
        <div class="company">{{item.company}}</div>
        <div class="exp-top">
          <h5>{{item.title}}</h5>
          <p class="date">{{item.date}}</p>
        </div>
        <transition name="fade">
          <p v-show="item.show">{{item.description}}</p>
        </transition>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      work: [
        {
          company: "Litax",
          title: "Designer and frontend developer",
          date: "06/2017 - present",
          description:
            "Designed and managed e-commerce, Wordpress websites, blogs, design logos, catalogs, packaging, and marketing collateral. Communicated directly with clients to establish project parameters, wrote proposals for design work, analyzed competitor web sites, determined web site content, produced site maps for client approval, and communicated progress with client throughout length of project.",
          show: false
        },
        {
          company: "Ronin Agency",
          title: "Designer and frontend developer",
          date: "09/2016 - 06/2017",
          description:
            "Worked in an agency environment on the front end in a wide array of custom small-to-medium size projects using HTML5, CSS3, and JavaScript. Participated in consultations with clients to clarify their needs. Wrote technical documentation and manuals for clients and team members.",
          show: false
        },
        {
          company: "EOL Solutions",
          title: "IT Lead / Operations and CS Management",
          date: "09/2013 - 09/2016",
          description:
            "Responsible for overall IT infrastructure product development, customer delivery and support for a product present in over 15 countries all over the world. Managed, coordinated, and oversaw events and smaller international teams (5 – 10 people). Ensured ongoing customer support by: coaching other employees and contractors, implementing organizational processes, helped to develop, test, iterate and reﬁne CS team processes",
          show: false
        },
        {
          company: "Hrvatski telekom",
          title: "Senior Customer Support Specialist",
          date: "10/2011 - 09/2013",
          description:
            "Quantiﬁed customer feedback to help the company improve their products, services and procedures which resulted in better customer experience",
          show: false
        },
        {
          company: "Freelance",
          title: "Web and graphical designer",
          date: "03/2009 - 11/2011",
          description:
            "Worked with various clients through Freelancer.com, and word of mouth to perform anything from minor alterations to entire site redesigns.",
          show: false
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
@import "./Work.scss";
</style>