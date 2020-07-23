<template>
	<div>
		<v-app-bar
			color="info"
			dark
			fixed
			prominent
			shrink-on-scroll
			>
			<v-app-bar-nav-icon></v-app-bar-nav-icon>

			<v-toolbar-title>
				Social
				<v-icon>mdi-github</v-icon>
			</v-toolbar-title>

			<v-spacer></v-spacer>

			<v-btn icon to="/chat">
				<v-badge color="green" dot overlap>
					<v-icon>mdi-message</v-icon>
				</v-badge>
			</v-btn>
			<template v-if="authenticated">
				<v-avatar color="cyan darken-3" small @click="logout">{{ initial }}</v-avatar>
			</template>
			<template v-else>
				<v-btn icon to="/login">
					login
				</v-btn>
			</template>

			<v-menu
				left
				bottom
				>
				<template v-slot:activator="{ on, attrs }">
					<v-btn
						icon
						v-bind="attrs"
						v-on="on"
						>
						<v-icon>mdi-dots-vertical</v-icon>
					</v-btn>
				</template>

				<v-list>
					<v-list-item
						v-for="n in 5"
						:key="n"
						@click="() => {}"
						>
						<v-list-item-title>Option {{ n }}</v-list-item-title>
					</v-list-item>
				</v-list>
			</v-menu>
		</v-app-bar>
	</div>
</template>

<script>
	import {
		mapGetters,
		mapActions
	} from 'vuex';
	export default {
		name: 'AppBar',
		computed: mapGetters(['authenticated', 'initial']),
		methods: mapActions(['logout'])
	}
	</script>