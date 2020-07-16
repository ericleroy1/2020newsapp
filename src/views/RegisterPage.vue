<template>
	<v-app id="inspire">
		<v-content>
			<v-container class="fill-height" fluid>
				<v-row align="center" justify="center">
					<v-col cols="12" sm="8" md="4">
						<v-card depressed>
							<v-toolbar color="primary" dark flat>
								<v-toolbar-title>Register</v-toolbar-title>
								<v-spacer />
							</v-toolbar>
							<v-card-text>
								<v-form @submit.prevent="pressed">
									<v-text-field
										v-model="email"
										label="email"
										name="register"
										type="email"
									/>

									<v-text-field
										v-model="password"
										id="password"
										label="password"
										name="password"
										type="password"
									/>
									<v-btn type="submit" color="primary">Register</v-btn>
								</v-form>
							</v-card-text>
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
import * as firebase from "firebase/app";

export default {
	name: "register",
	data() {
		return {
			email: "",
			password: "",
			error: ""
		};
	},
	methods: {
		async pressed(){
			try{
			firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
			alert("Registration Successful")
			this.$router.replace({name: "LoginPage"})
			}catch(err){
				console.log(err)
			}
		},
		register(){

		}
	}
};
</script>