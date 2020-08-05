<template>
	<v-container>
		<v-row class="content">
			<v-col cols="12" offset-x="3" v-if="authenticated">
				<CreatePost></CreatePost>
			</v-col>
			<v-col cols="12" v-else>
				<v-alert type="info" dismissible>
					<v-btn text to="/login">Login</v-btn> to post
				</v-alert>
			</v-col>
		</v-row>
		<v-row>
			<v-col cols-md="6" offset-md="3">
				<Posts></Posts>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
	import {
		mapGetters
	} from 'vuex';
	import Posts from '@/components/Posts.vue'
	import CreatePost from '@/components/CreatePost.vue'
	export default {
		name: 'Layout',
		components: {
			CreatePost,
			Posts,
		},
		computed: mapGetters(['authenticated'])
	}
	</script>

	<style scoped>
	</style>