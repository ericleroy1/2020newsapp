<template>
	<v-app id="inspire">
		<v-content>
			<v-container class="fill-height" fluid>
				<v-row align="center" justify="center">
					<v-col cols="12" sm="8" md="4">
						<v-card depressed>
							<v-toolbar color="primary" dark flat>
								<v-toolbar-title>Login</v-toolbar-title>
								<v-spacer />
							</v-toolbar>
							<v-card-text>
								<v-form @submit.prevent="pressed">
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
									<v-btn type="submit" color="primary">Login</v-btn>
								</v-form>
							</v-card-text>
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
import * as firebase from "firebase/app";
import "firebase/auth";

export default {
	name: "login",
	data: function() {
		return {
			email: "",
			password: ""
		};
	},
	methods: {
			pressed(){
			firebase.auth().signInWithEmailAndPassword(this.email, this.password)
			.then(()=>this.$router.replace({name: "Home"}))
			.catch(err=>{alert(err)})
		},
		}
	}

</script>