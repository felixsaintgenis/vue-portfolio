<template>
  <div>
    <section class="hero is-info is-bold">
      <div class="hero-body">
        <div class="container">
          <h1 class="title is-2">Les Projets</h1>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container is-fluid">
        <div class="columns is-multiline">
          <div class="column is-one-third" v-bind:key="project.title" v-for="project in projects">
            <post-card v-bind="project"></post-card>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import ProjectsService from "@/services/ProjectsService";
import PostCard from "@/components/PostCard";
export default {
  name: "projects",
  components: {
    PostCard
  },
  data() {
    return {
      airtableResponse: []
    };
  },
  mounted: function() {
    let self = this;
    async function getProjects() {
      try {
        const response = await ProjectsService.getProjects();
        console.log(response);
        self.airtableResponse = response.data.records;
      } catch (err) {
        console.log(err);
      }
    }
    getProjects();
  },
  computed: {
    projects() {
      let projectList = [];
      for (var i = 0; i < this.airtableResponse.length; i++) {
        let project = {
          title: this.airtableResponse[i].fields.Title,
          image: this.airtableResponse[i].fields.Attachments[0].url,
          slug: this.airtableResponse[i].fields.Slug,
          body: this.airtableResponse[i].fields.Body
        };
        projectList.push(project);
      }
      return projectList;
    }
  }
};
</script>