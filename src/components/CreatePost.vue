<template>
	<div id="CreatePost">
		<template>
			<v-list-item two-lines>
				<v-list-item-avatar>
					<v-avatar>
						<v-icon large>mdi-account-circle</v-icon>
					</v-avatar>
				</v-list-item-avatar>
				<v-list-item-content>
					<v-list-item-title>
						Create Post
					</v-list-item-title>
					<v-list-item-subtitle>@{{ user.username }}</v-list-item-subtitle>
				</v-list-item-content>
			</v-list-item>
			<v-textarea dense rows="1" outlined
				v-model="newpost"
				@click:append-outer="create"
				style="max-width:500px"
				rounded append-outer-icon="mdi-twitter"></v-textarea>
		</template>
	</div>
</template>

<script>
	import {
		mapActions,
		mapGetters
	} from 'vuex';
	export default {
		name: 'CreatePost',
		data() {
			return {
				newpost: ''
			}
		},
		methods: {
			create: function () {
				const id = this.posts.length
				const	postdata = {
					id,
					liked: false,
					likes: 0,
					verified: false,
					author: this.user.username,
					content: this.newpost,
					icon: 'mdi-account-circle'
				}
				this.post(postdata)
				this.newpost = ''
			},
			...mapActions(['post'])
		},
		computed: mapGetters(['posts', 'user'])
	}
	</script>