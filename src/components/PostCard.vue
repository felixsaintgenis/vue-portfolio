<template>
  <div class="post-card">
    <div class="card">
      <div class="card-image">
        <figure class="image is-16by9">
          <img class="image" :src="image" alt="project image" />
        </figure>
      </div>
      <div class="card-content">
        <div class="media">
          <div class="media-content">
            <p class="title is-4">{{title}}</p>
          </div>
        </div>
        <div class="content">
          <router-link :to="'/project/'+slug" class="button is-fullwidth">Voir le projet</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PostCard",
  props: {
    title: String,
    date: String,
    snippet: String,
    image: String,
    slug: String
  }
};
</script>