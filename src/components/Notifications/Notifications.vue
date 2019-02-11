<template>
  <div id="notification-area"></div>
</template>

<script>
export default {
  data() {
    return {};
  },

  created: function() {
    setTimeout(() => {
      this.notifyrr(
        "Since you've been here for awhile now, maybe you would like to download a print-friendly CV?"
      );
    }, 45000);
  },

  methods: {
    notifyrr: function(msg) {
      const notificationArea = document.querySelector("#notification-area");
      const notificationBox = document.createElement("DIV");
      const notificationContent = document.createElement("DIV");
      const notificationClose = document.createElement("A");
      const linkSpan = document.createElement("div");
      const downloadLink = document.createElement("A");

      notificationBox.classList.add("notification-box");
      notificationContent.classList.add("notification-content");
      notificationClose.classList.add("notification-close");
      notificationContent.innerText = msg;
      downloadLink.innerHTML =
        '<a href="/cv_zvonimir_jovic.pdf" download target="_blank">Download CV</a>';
      notificationContent.appendChild(linkSpan);
      linkSpan.classList.add("download-button");
      linkSpan.appendChild(downloadLink);
      notificationClose.setAttribute("href", "#");
      notificationBox.appendChild(notificationContent);
      notificationArea.appendChild(notificationBox);
      notificationBox.appendChild(notificationClose);

      notificationClose.addEventListener("click", function() {
        notificationBox.classList.add("hide");
      });

      setTimeout(function() {
        notificationBox.classList.add("hide");
      }, 20000);

      setTimeout(function() {
        notificationArea.removeChild(notificationBox);
      }, 20500);
    }
  }
};
</script>

<style lang="scss">
@import "./Notifications.scss";
</style>