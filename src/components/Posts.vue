<template>
	<div id="Posts">
		<v-slide-x-reverse-transition group transion="scroll-x-reverse-transition">
			<v-card max-width="500"
				class="ma-2"
				color="#2397f1"
				dark
				v-for="post in posts"
				:key="post.id"
				v-if="post.content"
				transition="slide-x-transition"
				>
				<v-card-title>
					<v-card-avatar>
						<v-icon large>{{ post.icon }}</v-icon>
					</v-card-avatar>
					{{ post.author }}
					<v-icon small v-if="post.verified" class="mr-1">mdi-check-circle</v-icon>
					<v-spacer></v-spacer>
					<v-menu
						bottom
						transition="scale-transition"
						>
						<template v-slot:activator="{ on, attrs }">
							<v-btn
								origin="bottom left"
								offset-y
								icon
								dark
								v-bind="attrs"
								v-on="on"
								>
								<v-icon>mdi-dots-vertical</v-icon>
							</v-btn>
						</template>

						<v-list>
							<v-list-item>
								<v-list-item-title>
									<v-btn text tile max-width="100%" @click="deletePost(post)">Delete tweet</v-btn>
								</v-list-item-title>
							</v-list-item>
						</v-list>
					</v-menu>
				</v-card-title>
				<v-card-text>
					{{ post.content }}
				</v-card-text>
				<v-card-actions>
					<span v-if="post.likes">{{ post.likes }}</span>
					<v-btn @click="like(post)" icon :color="post.liked ? 'error': 'inherit' ">
						<v-icon>mdi-heart</v-icon>
					</v-btn>
					<v-btn icon>
						<v-icon>mdi-comment</v-icon>
					</v-btn>
					<v-spacer></v-spacer>
					<v-btn icon color="primary">
						<v-icon>mdi-share</v-icon>
					</v-btn>
				</v-card-actions>
			</v-card>
		</v-slide-x-reverse-transition>
	</div>
</template>

<script>
	import {
		mapGetters,
		mapActions
	} from 'vuex'
	export default {
		name: 'Posts',
		methods: {
			like: function (post) {
				post.liked = !post.liked
				post.liked ? post.likes++: post.likes--
			},
			...mapActions(['deletePost'])
		},
		computed: mapGetters(['posts'])
	}
	</script>