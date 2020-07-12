<template>
	<nav>
		<v-app-bar flat app>
			<v-app-bar-title class="text-uppercase grey--text font-weight-light">
				<span>
					<v-img :src="require('../assets/MyNewsLogo.png')" />
				</span>
			</v-app-bar-title>
			<v-spacer></v-spacer>
			<v-btn text color="grey">
				<router-link to="/login">Login</router-link>
			</v-btn>
			<v-app-bar-nav-icon
				@click="drawer = !drawer"
				class="grey--text"
			></v-app-bar-nav-icon>
		</v-app-bar>

		<v-navigation-drawer app right v-model="drawer">
			<v-list>
				<v-list-item>
					<v-list-item-action></v-list-item-action>
					<v-list-item-content>
						<v-list-item-title>
							<router-link to="/">Home</router-link>
						</v-list-item-title>
					</v-list-item-content>
				</v-list-item>
				<v-list-item>
					<v-list-item-action></v-list-item-action>
					<v-list-item-content>
						<v-list-item-title>
							<router-link to="/search">Search</router-link>
						</v-list-item-title>
					</v-list-item-content>
				</v-list-item>
				<v-list-item>
					<v-list-item-action></v-list-item-action>
					<v-list-item-content>
						<v-list-item-title>
							<router-link to="/mylist">MyList</router-link>
						</v-list-item-title>
					</v-list-item-content>
				</v-list-item>
				<v-list-item>
					<v-list-item-action></v-list-item-action>
					<v-list-item-content>
						<v-list-item-title>
							<router-link to="/login">Login</router-link>
						</v-list-item-title>
					</v-list-item-content>
				</v-list-item>
				<v-list-item>
					<v-list-item-action></v-list-item-action>
					<v-list-item-content>
						<v-list-item-title>
							<router-link to="/register">Register</router-link>
						</v-list-item-title>
					</v-list-item-content>
				</v-list-item>
			</v-list>
		</v-navigation-drawer>
	</nav>
</template>

<script>
export default {
	name: "Navbar",
	data() {
		return {
			drawer: false
		};
	}
};
</script>

<style></style>