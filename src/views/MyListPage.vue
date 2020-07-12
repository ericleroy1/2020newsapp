<template>
	<div>
		<h3 class="heading">MyList</h3>

		<ul id="my-list">
			<li v-for="myList in myList" v-bind:key="myList.docID">
				<div class="row">
					<div class="col-8 myList-link">
						<a v-bind:href="myList.url" target="_blank">
							{{ myList.title }}
						</a>
					</div>
					<div class="col-1"></div>
					<div class="col-2 delete-button">
						<button
							class="btn btn-small btn-outline-secondary"
							v-on:click="deleteListItem(myList.docID)"
						>
							Del
						</button>
					</div>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>

import { mapActions } from "vuex";
import { mapState } from "vuex";
export default {
	name: "myListPage",
	data() {
		return {
			user: {},
			data: {},
			myList: []
		};
	},
	created() {

	},
	computed: {
		...mapState(["myList"])
	},
	methods: {

	}
};
</script>

<style></style>