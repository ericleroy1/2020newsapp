<template>
	<div>
		<h3 class="heading">MyList</h3>
		<ul id="my-list">
			<li v-for="myListItem in myList" :key="myListItem.id">
				<div class="row">

					<div class="col-8 myList-link">
						<a v-bind:href="myListItem.url">
						<p>{{ myListItem.link }}</p>
						</a>
					</div>
	

				<div class="col-1"></div>
					<div class="col-2 delete-button">
						<button
							class="btn btn-small btn-outline-secondary"	
							v-on:click="deleteListItem(myListItem.id)">Delete
						</button>
					</div>
					</div>
			</li>
		</ul>
	</div>
</template>

<script>

import db from "../main"
import firebase from "firebase";

export default {
	name: "myListPage",
	props: ["data"],
	data() {
		return {
			myList: [],
			myListItem: {
				link: ""
			}
		};
	},
	created() {
		this.getMyList();
	},
	computed: {
		this.getMyList();
	},
	methods: {
		async getMyList() {
      var myListRef = await firebase
      .firestore()
      .collection("users")
      .doc(firebase.auth().currentUser.uid)
	  .collection("myList")

      myListRef.onSnapshot(snap=>{
        this.myList = [];
        snap.forEach(doc =>{
          var myListItem = doc.data();
          myListItem.id = doc.id;
          this.myList.push(myListItem);
		})
      })
	},
	deleteListItem(myListItem) {
		firebase
		.firestore()
		.collection("users")
		.doc(firebase.auth().currentUser.uid)
		.collection("myList")
		.doc(myListItem)
		.delete();
	}

	}
};
</script>

<style></style>