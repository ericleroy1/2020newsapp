<template>
  <v-app>
    <ArticlePreview v-for="(article, index) in articles" v-bind:data="article" v-bind:key="index"></ArticlePreview>
    <hr />
  </v-app>
</template>

<script>
import ArticlePreview from "../components/ArticlePreview";
export default {
  name: "Home",
  components: {
    ArticlePreview
  },
  data: function() {
    return {
      articles: []
    };
  },
  created: function() {
    var these = this;
    let url =
      "https://newsapi.org/v2/top-headlines?" +
      "country=us&" +
      "apiKey=39bd2d941e0d433e8f54efdd2e183dda";
    let req = new Request(url);
    fetch(req)
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        these.articles = data.articles;
      });
  },
  mounted: function() {}
};
</script>