<template>
  <div>
    <section class="hero is-info is-bold">
      <div class="hero-body">
        <div class="container">
          <h1 class="title is-2">Parcours et Compétences</h1>
        </div>
      </div>
    </section>
    <section class="section">
      <h2 class="title is-3 has-text-weight-medium has-text-centered">Éducation</h2>
      <div class="container">
        <div class="columns">
          <div class="column">
            <div class="box">
              <h3 class="title is-4 has-text-weight-medium">Simplon</h3>
              <p>Bootcamp de 6 mois en Javascript Fullstack. Apprentissage du javascript ES6 avec node et react.</p>
            </div>
          </div>
          <div class="column">
            <div class="box">
              <h3 class="title is-4 has-text-weight-medium">Bluenove</h3>
              <p>2 ans d'expériences dans le développement d'une application en utilisant react, redux, graphql et bootstrap.</p>
            </div>
          </div>
          <div class="column">
            <div class="box">
              <h3 class="title is-4 has-text-weight-medium">Projets personnels</h3>
              <p>Plusieurs applications fullstack en utilisants différentes technologies comme GatsbyJS, wordpress, nodeJS, react et vueJS</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section">
      <h2 class="title is-3 has-text-weight-medium has-text-centered">Les technos utilisées</h2>
      <div class="container">
        <div class="columns is-centered">
          <div class="column is-one-fifth">
            <div class="box">
              <figure class="image is-square">
                <img src="../assets/images/vue.png" alt="Placeholder image" />
              </figure>
              <h3 class="tech-box-title title is-4 has-text-weight-medium has-text-centered">Vue.js</h3>
              <p>Portfolio et sites pour clients</p>
            </div>
          </div>
          <div class="column is-one-fifth">
            <div class="box">
              <figure class="image is-square">
                <img src="../assets/images/js.png" alt="Placeholder image" />
              </figure>
              <h3
                class="tech-box-title title is-4 has-text-weight-medium has-text-centered"
              >JavaScript</h3>
              <p>Utilisation de Javascript ES6</p>
            </div>
          </div>
          <div class="column is-one-fifth">
            <div class="box">
              <figure class="image is-square">
                <img src="../assets/images/node.png" alt="Placeholder image" />
              </figure>
              <h3 class="tech-box-title title is-4 has-text-weight-medium has-text-centered">Node.js</h3>
              <p>Développement de plusieurs back-end d'applications</p>
            </div>
          </div>
          <div class="column is-one-fifth">
            <div class="box">
              <figure class="image is-square">
                <img src="../assets/images/wordpress.png" alt="Placeholder image" />
              </figure>
              <h3
                class="tech-box-title title is-4 has-text-weight-medium has-text-centered"
              >Wordpress</h3>
              <p>Développement de thèmes et utilisation de l'API wordpress</p>
            </div>
          </div>
        </div>
        <p
          class="tech-box-title title is-4 has-text-weight-light has-text-centered"
        >Vue • React • Gatsby • Graphql • Redux • Wordpress • Mongodb</p>
      </div>
    </section>
  </div>
</template>

<style type="text/css">
.box {
  height: 100%;
}
.tech-box-title {
  margin-top: 1.5rem;
}
</style>

<script>
export default {
  name: "about"
};
</script>