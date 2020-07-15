<template>
	<nav>
		<v-app-bar flat app>
			<v-app-bar-title class="text-uppercase grey--text font-weight-light">
				<span>
					<router-link to="/"><v-img :src="require('../assets/MyNewsLogo.png')" /></router-link>
				</span>
			</v-app-bar-title>
			<v-spacer></v-spacer>

            <div>
                <span v-if="loggedIn">
                    <router-link to="/logout">
                    <v-btn depressed v-on:click="pressed" text color="grey">Logout</v-btn>
                    </router-link>
                    </span>
				<span v-else>
                    <router-link to="/login">
                    <v-btn depressed>Login</v-btn>
                    </router-link>
                    </span>
            </div>

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
                <v-list-item>
					<v-list-item-action></v-list-item-action>
					<v-list-item-content>
						<v-list-item-title>
							<router-link to="/logout">Logout</router-link>
						</v-list-item-title>
					</v-list-item-content>
				</v-list-item>
			</v-list>
		</v-navigation-drawer>
	</nav>
</template>

<script>
import * as firebase from "firebase/app";
import "firebase/auth";

export default {
    mounted() {
        firebase.auth().onAuthStateChanged(user=> {
            if(user){
                this.loggedIn = true;
            } else {
                this.loggedIn = false;
            }
        })
    },
	name: "Navbar",
	data() {
		return {
            drawer: false,
            loggedIn: false,
		};
    },
    methods: {
        async logout(){
            try {
                const data = await firebase.auth().signOut;
                this.$router.replace({name: "LogoutPage"})
            }catch(err){
                console.log(err)
            }
        },
        	pressed(){
			try{
                firebase.auth().signOut()
                this.$router.replace({name: "Home"})
			}catch(err){
				console.log(err)
			}
		},
    }
};
</script>

<style>
</style>