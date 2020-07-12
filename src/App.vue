<template>
	<v-app>
		<v-content class="ma-4">
			<Navbar></Navbar>
			<router-view></router-view>
		</v-content>
	</v-app>
</template>

<script>

import Navbar from "./components/Navbar";
export default {
	components: {
		Navbar
	},
	data() {
		return {};
	},

};
</script>