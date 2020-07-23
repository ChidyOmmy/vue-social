<template>
	<div id="Home">
		<AppBar></AppBar>
		<layout class="mb-5"></layout>
		<v-footer absolute class="pa-2">&copy;
			<v-spacer></v-spacer>
			{{ new Date().getFullYear() }}
		</v-footer>
	</div>
</template>

<script>
	import AppBar from '@/components/layers/AppBar.vue';
	import Layout from '@/components/layers/Layout.vue';
	import {
		mapGetters
	} from 'vuex';
	export default {
		name: 'Home',
		components: {
			Layout,
			AppBar
		},
		computed: mapGetters(['user', 'authenticated']),
	}
	</script>