<template>
  <div id="app">
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <router-link class="navbar-item" to="/">
          <span>Félix Saint-Genis</span>
        </router-link>

        <a
          role="button"
          class="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
          :class="{ 'is-active': showNav }"
          @click="showNav = !showNav"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" class="navbar-menu" :class="{ 'is-active': showNav }">
        <div class="navbar-start"></div>

        <div class="navbar-end">
          <router-link to="/about" class="navbar-item">CV</router-link>
          <router-link to="/projects" class="navbar-item">Projets</router-link>
          <router-link to="/contact" class="navbar-item">Contact</router-link>
        </div>
      </div>
    </nav>
    <router-view />
    <footer class="footer is-equal-padding">
      <div class="content has-text-centered">
        <p>
          Construit avec vueJS et le
          <a
            href="https://dev.to/markjohnson303/building-a-portfolio-site-with-vue-bulma-and-airtable-5a58"
            target="_blank"
          >tutoriel</a> de Mark Johnson
        </p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      showNav: false
    };
  }
};
</script>

<style type="text/css">
#app {
  min-height: 100vh;
  overflow: hidden;
  display: block;
  position: relative;
  padding-bottom: 120px; /* height of your footer */
}
footer {
  position: absolute;
  bottom: 0;
  width: 100%;
}
.has-bg-img {
  background: url("./assets/images/homebackground.jpg") center center;
  background-size: cover;
}
</style>

<style lang="sass">
@import "~bulma/bulma.sass"
@import "./assets/css/customize.css"
</style>