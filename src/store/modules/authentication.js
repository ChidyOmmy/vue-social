const state = {
	authenticated: false,
	message: {},
	user: {}
}

const getters = {
	user: state => state.user,
	initial: state => state.user.username[0],
	message: state => state.message,
	authenticated: state => state.authenticated
}

const actions = {
	login: function ( {
		commit
	}, loginData) {
		commit('LOGIN', loginData)
	},
	logout: function ( {
		commit
	}) {
		commit('LOGOUT')
	}
}

const mutations = {
	LOGIN(state, loginData) {
		if (loginData.username != '' && loginData.password != '') {
			state.user = loginData
			state.authenticated = true
		} else {
			state.message = {
				color: 'red',
				show: true,
				content: 'Invalid Credentials'
			}
		}
	},
	LOGOUT(state) {
		if (confirm('logout?')) {
			state.authenticated = false
			state.user = {}
		}
	}
}

export default {
	state,
	getters,
	actions,
	mutations
}