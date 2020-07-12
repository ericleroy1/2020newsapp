<template>
	<v-app id="inspire">
		<v-content>
			<v-container class="fill-height" fluid>
				<v-row align="center" justify="center">
					<v-col cols="12" sm="8" md="4">
						<v-card class="elevation-12">
							<v-toolbar color="primary" dark flat>
								<v-toolbar-title>Register</v-toolbar-title>
								<v-spacer />
							</v-toolbar>
							<v-card-text>
								<v-form>
									<v-text-field
										v-model="email"
										label="email"
										name="register"
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
								<v-btn v-on:click="register" color="primary">Register</v-btn>
							</v-card-actions>
						</v-card>
					</v-col>
				</v-row>
				<p class="message">Already registered?</p>
				<router-link to="/login">
					<h5>Click here to login</h5>
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
	name: "register",
	data() {
		return {
			email: "",
			password: ""
		};
	},
	methods: {
		register: function(e) {
			firebase
				.auth()
				.createUserWithEmailAndPassword(this.email, this.password)
				.then(function() {
					alert("Your account has been created!");
				})
				.then(
					user => {
						this.$router.push("/login");
					},
					err => {
						alert(err.message);
					}
				);
			e.preventDefault();
			this.$store.commit("SET_CURRENT_USER", this.email);
		}
	}
};
</script>