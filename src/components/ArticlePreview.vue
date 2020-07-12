<template>
    <v-card class="my-5 pa-3">
    <v-container>

    <div>{{ data.source.name }}</div>
    <v-img height="180" v-bind:src="data.urlToImage"></v-img>

    
    <p class="text-wrap">
    {{ data.title }}
    </p>
          
    <v-card-actions class="justify-center">
        <v-btn text>Add to MyList</v-btn>
    </v-card-actions>
    </v-container>
    </v-card>
</template>

<script>

export default {
  name: "ArticlePreview",
  props: ["data"],
  data: function() {
    return {};
  },

};
</script>

<style>

</style>