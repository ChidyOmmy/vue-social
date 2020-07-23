<template>
	<div id="Login">
		<v-snackbar :color="message.color" timeout="1000" app class="p-1" top left rounded max-width="10" v-model="message.show">
			{{ message.content }}
		</v-snackbar>
		<v-card width="400" class="mx-auto my-auto mt-5">
			<v-card-title class="display-3">
				Login
			</v-card-title>
			<v-divider></v-divider>
			<v-form>
				<v-text-field label="username"
					prepend-icon="mdi-account-circle"
					v-model="loginData.username"
					required
					></v-text-field>
				<v-text-field
					prepend-icon="mdi-lock"
					:append-icon="showPassword ? 'mdi-eye': 'mdi-eye-off' "
					@click:append="showPassword = !showPassword"
					:type="showPassword ? 'text': 'password' "
					label="password" required v-model="loginData.password"></v-text-field>
				<v-divider></v-divider>
				<v-card-actions>
					<v-btn color="info" @click="log">Login</v-btn>
					<v-spacer></v-spacer>
					<v-btn color="success" disabled>Register</v-btn>
				</v-card-actions>
			</v-form>
		</v-card>
	</div>
</template>

<script>
	import {
		mapGetters,
		mapActions
	} from 'vuex';
	export default {
		name: 'Login',
		data() {
			return {
				showPassword: false,
				loginData: {
					username: '',
					password: ''
				}
			}
		},
		methods: {
			log: function () {
				this.login(this.loginData)
				this.authenticated ? this.$router.push({
					name: 'Home', params: {}}): this.message = 'login failed';
			},
			...mapActions(['login'])
		},
		mounted() {
			if (this.authenticated) {
				this.$router.push({
					name: 'Home', params: {}})
			}
		},
		computed: mapGetters(['message', 'authenticated'])
	}
	</script>