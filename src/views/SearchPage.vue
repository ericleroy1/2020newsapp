<template>
	<div>
		<h3>Search news by keywords</h3>

		<input
			class="form-control"
			type="text"
			placeholder="search for news..."
			v-model="searchInput"
			v-on:keyup.enter="searchNews"
		/>

		<button
			v-on:click="searchNews"
			type="button"
			class="btn btn-small btn-outline-secondary"
		>
			Submit
		</button>

		<ArticlePreview
			v-for="(article, index) in articles"
			v-bind:data="article"
			v-bind:key="index"
		></ArticlePreview>
	</div>
</template>

<script>
import ArticlePreview from "../components/ArticlePreview";
export default {
	data() {
		return {
			articles: [],
			searchInput: ""
		};
	},
	components: {
		ArticlePreview
	},
	methods: {
		searchNews: function() {
			let these = this;
			let url =
				"https://newsapi.org/v2/everything?" +
				"q=" +
				this.searchInput +
				"&" +
				"apiKey=39bd2d941e0d433e8f54efdd2e183dda";
			let req = new Request(url);
			fetch(req)
				.then(function(response) {
					return response.json();
				})
				.then(function(data) {
					console.log(data.articles);
					these.articles = data.articles;
				});
			this.searchInput = "";
		}
	}
};
</script>

<style scoped></style>