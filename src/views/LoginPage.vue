<template>
	<v-app id="inspire">
		<v-content>
			<v-container class="fill-height" fluid>
				<v-row align="center" justify="center">
					<v-col cols="12" sm="8" md="4">
						<v-card class="elevation-12">
							<v-toolbar color="primary" dark flat>
								<v-toolbar-title>Login</v-toolbar-title>
								<v-spacer />
							</v-toolbar>
							<v-card-text>
								<v-form>
									<v-text-field
										v-model="email"
										label="email"
										name="login"
										type="text"
									/>

									<v-text-field
										v-model="password"
										id="password"
										label="password"
										name="password"
										type="password"
									/>
								</v-form>
							</v-card-text>
							<v-card-actions>
								<v-spacer />
								<v-btn v-on:click="login" color="primary">Login</v-btn>
							</v-card-actions>
						</v-card>
					</v-col>
				</v-row>
				<p class="message">Not registered?</p>
				<router-link to="/register">
					<h5>Click here to register</h5>
				</router-link>
			</v-container>
		</v-content>
	</v-app>
</template>

<script>
import firebase from "firebase";
import { mapActions } from "vuex";
import { mapState } from "vuex";
export default {
	name: "login",
	data: function() {
		return {
			userNameDisplay: "",
			email: "",
			password: ""
		};
	},
	methods: {
		login: function(e) {
			e.preventDefault();
			firebase
				.auth()
				.signInWithEmailAndPassword(this.email, this.password)
				.then(user => {
					this.$router.push("/");
					this.$store.commit("SET_CURRENT_USER", this.email);
				})
				.catch(error => {
					console.log(error);
				});
		}
	}
};
</script>