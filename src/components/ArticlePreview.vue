<template>
  
    <v-card flat class="my-5 pa-3">
    <v-container>

      <div>{{ data.source.name }}</div>
      <a v-bind:href="data.url" class="text-decoration-none black--text">
      <v-img class="image" height="180" v-bind:src="data.urlToImage"></v-img>

      
      <p class="text-wrap">
      {{ data.title }}
      </p>
      
      </a>

      <v-card-actions class="justify-center">
          <v-btn outlined color="primary" v-on:click="addToMyList" text>Add to MyList</v-btn>
      </v-card-actions>

    </v-container>
    <v-divider class="mx-4"></v-divider>
    </v-card>
</template>

<script>
import db from "../main"
import firebase from "firebase"
import "firebase/auth";

export default {
  name: "ArticlePreview",
  props: ["data"],
  data: function() {
    return {
      myList: [],
      myListItem: {
        link: ""
      }
    };
  },
  methods: {
    addToMyList() {
      firebase
      .firestore()
      .collection("users")
      .doc(firebase.auth().currentUser.uid)
      .collection("myList")
      .add({
        link: this.data.title,
        url: this.data.url
      })
    },
  }
};
</script>

<style scoped>

.image {
  /* height: 100%; */
  width: 45%;
}


</style>