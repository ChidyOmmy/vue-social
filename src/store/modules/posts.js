const state = {
	posts: [{
		id: 0,
		liked: false,
		author: 'twitter',
		verified: true,
		likes: 966,
		icon: 'mdi-twitter',
		content: 'This is the best place to raise your voices, just like birds keep tweeting 🐦 '
	},
		{
			id: 1,
			liked: false,
			author: 'apple',
			verified: true,
			likes: 546,
			icon: 'mdi-apple',
			content: 'Think differently'
		},
		{
			id: 2,
			liked: false,
			author: 'Google Chrome',
			verified: true,
			likes: 44,
			icon: 'mdi-google-chrome',
			content: 'Search privately, with incognito tabs '
		},
		{
			id: 3,
			liked: false,
			author: 'HTML5',
			verified: true,
			likes: 116,
			icon: 'mdi-web',
			content: 'Any button inside form tag has type set to submit, add type attribute set to button to override this',
		},
		{
			id: 4,
			liked: false,
			author: 'instagram',
			verified: true,
			likes: 817,
			icon: 'mdi-instagram',
			content: 'Enough of this tweets, see HD pictures on instagram, Link in bio 😀'
		}]
}

const getters = {
	posts: state => state.posts
}

const actions = {
	post: function ( {
		commit
	}, postData) {
		commit('ADD_POST', postData)
	},
	deletePost: function ( {
		commit
	}, post) {
		commit('DELETE', post)
	}
}

const mutations = {
	ADD_POST(state, postData) {
		state.posts.unshift(postData)
	},
	DELETE(state, postData) {
		state.posts = state.posts.filter(post => post.id != postData.id)
	}
}

export default {
	state,
	getters,
	actions,
	mutations
}